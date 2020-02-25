import { Component, OnInit } from '@angular/core';
import {FormState} from '../../../shared/classes/form-state';

@Component({
  selector: 'app-movie-edit-form',
  templateUrl: './movie-edit-form.component.html',
  styleUrls: ['./movie-edit-form.component.scss']
})
export class MovieEditFormComponent extends FormState implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
