import { Component, OnInit } from '@angular/core';
import {FormState} from '../../../shared/classes/form-state';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.scss']
})
export class UserEditFormComponent extends FormState implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
