import { Component, OnInit } from '@angular/core';
import {ModalConfig} from '../../../shared/classes/modal-config';
import {ModalRef} from '../../../shared/classes/modal-ref';
import {FormControl, FormGroup} from '@angular/forms';
import {IUser} from '../../../shared/interfaces/user.interface';
import {UsersService} from '../../../shared/services/users/users.service';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.scss']
})
export class UserEditFormComponent implements OnInit {

  user: IUser | null;

  get toUpdate() {
    return this.user && this.user.id;
  }

  get toAdd() {
    return !this.toUpdate;
  }

  formGroup = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl('')
  });
  get login() { return this.formGroup.get('login'); }
  get password() { return this.formGroup.get('password'); }
  get role() { return this.formGroup.get('role'); }

  constructor(
    public config: ModalConfig<IUser>,
    public modal: ModalRef,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.user = this.config.data || null;

    this.login.setValue(this.user ? this.user.login : '');
    this.password.setValue(this.user ? this.user.password : '');
    this.role.setValue(this.user ? this.user.role.id : null);
  }

  onClose() {
    this.modal.close('user edit closed result');
  }

  async onSave() {
    if (this.toUpdate) {
      this.update();
    } else if (this.toAdd) {
      this.add();
    }
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
}
