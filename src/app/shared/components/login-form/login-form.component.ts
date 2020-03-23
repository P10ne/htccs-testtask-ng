import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {validationMessage} from '../../utils/validationMessage';
import {UsersService} from '../../services/users/users.service';
import {AuthService} from '../../services/auth/auth.service';
import {IToLogin} from '../../interfaces/user.interface';
import {ModalRef} from '../../classes/modal-ref';
import {getFingerprint} from '../../utils/fingerPrint';

export enum LoginResult {
  SUCCESS,
  FAILED
};

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  validationMessage = validationMessage;
  private _requesting = false;
  set requesting(value) {
    this._requesting = value;
  }
  get requesting() {
    return this._requesting;
  }
  formGroup = new FormGroup({
    login: new FormControl(
      '',
      [Validators.required]),
    password: new FormControl(
      '',
      [Validators.required]),
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
      password: this.password.value,
      fingerPrint: await getFingerprint()
    };
    let loginRes = null;
    try {
      loginRes = await this.authService.login(data);
      this.modal.close({status: LoginResult.SUCCESS, role: loginRes.content.user.role});
    } catch (e) {
      console.log(e);
    } finally {
      this.requesting = false;
    }
  }

  // todo скрол формы не работает
}
