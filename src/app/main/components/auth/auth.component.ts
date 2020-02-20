import {Component, Input, OnInit} from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
