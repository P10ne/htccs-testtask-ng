import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from '../../../shared/services/modal/modal.service';
import {LoginFormComponent} from '../../../shared/components/login-form/login-form.component';
import {AuthService} from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  login: string | null = null;
  get isLoggedIn() {
    return !!this.login && this.login.length > 0;
  }
  constructor(
    private modalService: ModalService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.user.subscribe(value => {
      this.login = value ? value.login : null;
    });
  }

  openLogin() {
    this.modalService.open(LoginFormComponent, {});
  }

  async onLogout() {
    const logoutResponse = await this.authService.logout();
  }

}
