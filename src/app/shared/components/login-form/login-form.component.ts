import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  formGroup = new FormGroup({
    login: new FormControl('', Validators.minLength(4)),
    password: new FormControl(''),
    remember: new FormControl(false)
  });
  constructor() { }

  ngOnInit() {
  }

  submit() {
    // console.dir(this.formGroup.controls.remember);
  }

}
