import { Component, OnInit } from '@angular/core';
import {FormState} from '../../../shared/classes/form-state';
import {ModalConfig} from '../../../shared/classes/modal-config';
import {ModalRef} from '../../../shared/classes/modal-ref';
import {FormControl, FormGroup} from '@angular/forms';
import {IUser} from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.scss']
})
export class UserEditFormComponent extends FormState implements OnInit {

  user: IUser;

  formGroup = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl('')
  });
  get login() { return this.formGroup.get('login'); }
  get password() { return this.formGroup.get('password'); }
  get role() { return this.formGroup.get('role'); }

  constructor(public config: ModalConfig<IUser>, public modal: ModalRef) {
    super();
  }

  ngOnInit() {
    this.user = this.config.data;

    this.login.setValue(this.user.login);
    this.password.setValue(this.user.password);
    this.role.setValue(this.user.role);
  }

  onClose() {
    this.modal.close('user edit closed result');
  }

  show() {
    console.log(this.formGroup.value);
  }
}
