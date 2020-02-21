import {Component, Input, OnInit} from '@angular/core';
import {ModalService} from '../../../shared/services/modal/modal.service';
import {LoginFormComponent} from '../login-form/login-form.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  @Input() login: string | null = '';
  get isLoggedIn() {
    return !!this.login && this.login.length > 0;
  }
  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  openLogin(event: Event) {
    this.modalService.open(LoginFormComponent);
  }

}
