import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {validationMessage} from '../../utils/validationMessage';
import {UsersService} from '../../services/users/users.service';
import {AuthService} from '../../services/auth/auth.service';
import {IToLogin} from '../../interfaces/user.interface';
import {ModalRef} from '../../classes/modal-ref';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  private _requesting = false;
  set requesting(value) {
    this._requesting = value;
  }
  get requesting() {
    return this._requesting;
  }
  validationMessage = validationMessage;
  formGroup = new FormGroup({
    login: new FormControl(
      '',
      []),
    password: new FormControl(
      '',
      []),
    remember: new FormControl(
      false,
      [])
  });

  get login() { return this.formGroup.get('login'); }
  get password() { return this.formGroup.get('password'); }
  get remember() { return this.formGroup.get('remember'); }

  isInvalidControl(controlName: string): boolean {
    const control = this.formGroup.get(controlName);
    return control.invalid && control.touched;
  }

  getErrorsControl(controlName: string): ValidationErrors {
    return this.formGroup.get(controlName).errors;
  }

  isAuthBtnDisabled() {
    return this.formGroup.invalid || this.formGroup.pending;
  }

  constructor(
    private authService: AuthService,
    private modal: ModalRef
  ) { }

  ngOnInit() {
  }

  async submit() {
    this.requesting = true;
    const data: IToLogin = {
      login: this.login.value,
      password: this.password.value
    };
    await this.authService.login(data);
    this.requesting = false;
    this.modal.close();
  }

  // todo скрол формы не работает
}
