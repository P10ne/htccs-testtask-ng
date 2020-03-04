import { Component, OnInit } from '@angular/core';
import {ModalConfig} from '../../../shared/classes/modal-config';
import {ModalRef} from '../../../shared/classes/modal-ref';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {IUser} from '../../../shared/interfaces/user.interface';
import {UsersService} from '../../../shared/services/users/users.service';
import {validationMessage} from '../../../shared/utils/validationMessage';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.scss']
})
export class UserEditFormComponent implements OnInit {

  validationMessage = validationMessage;
  saving = false;
  setSaving(value) {
    this.saving = value;
  }
  user: IUser | null;

  get toUpdate() {
    return this.user && this.user.id;
  }

  get toAdd() {
    return !this.toUpdate;
  }

  formGroup = new FormGroup({
      login: new FormControl(
        '',
        {
          validators: [Validators.required],
          updateOn: 'blur'
        }
      ),
      password: new FormControl(
        '',
        []), // see ngOnInit
      role: new FormControl(
        '',
        [Validators.required])
  });
  get login() { return this.formGroup.get('login'); }
  get password() { return this.formGroup.get('password'); }
  get role() { return this.formGroup.get('role'); }

  isInvalidControl(controlName: string): boolean {
    const control = this.formGroup.get(controlName);
    return control.invalid && control.touched;
  }

  getErrorsControl(controlName: string): ValidationErrors {
    return this.formGroup.get(controlName).errors;
  }

  isSaveBtnDisabled() {
    return this.formGroup.invalid || this.formGroup.pending;
  }

  constructor(
    public config: ModalConfig<IUser>,
    public modal: ModalRef,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.user = this.config.data || null;

    if (this.user) {
      this.initForUpdate();
    } else {
      this.initForAdd();
    }
  }

  initForAdd() {
    this.login.setValue('');
    this.password.setValue('');
    this.role.setValue(null);

    this.login.setAsyncValidators([this.isExistLoginValidator.bind(this)]);
    this.password.setValidators([Validators.required, Validators.minLength(8)]);
  }

  initForUpdate() {
    this.login.setValue(this.user.login);
    this.password.setValue('');
    this.role.setValue(this.user.role.id);

    this.password.valueChanges.subscribe(value => {
      if (value !== '') {
        this.password.setValidators([Validators.minLength(8)]);
      }
    });
  }

  onClose() {
    this.modal.close('user edit closed result');
  }

  async onSave() {
    this.setSaving(true);
    if (this.toUpdate) {
      await this.update();
    } else if (this.toAdd) {
      await this.add();
    }
    this.setSaving(false);
  }

  async add() {
    try {
      const response = await this.usersService.add({
        login: this.login.value,
        password: this.password.value,
        roleId: this.role.value
      });
      console.log(response);
      this.modal.close();
    } catch (e) {
      console.error(e);
    }
  }

  async update() {
    try {
      const response = await this.usersService.update({
        id: this.user.id,
        login: this.login.value,
        password: this.password.value,
        roleId: this.role.value
      });
      console.log(response);
      this.modal.close();
    } catch (e) {
      console.error(e);
    }
  }

  async isExistLoginValidator(control: FormControl) {
    const login = control.value;
    const user = await this.usersService.isUserExist(login);
    let result = null;
    if (user.content.length > 0) {
      result = {isExistLogin: true};
    }
    return result;
  }
}
