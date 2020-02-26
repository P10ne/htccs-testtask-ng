import { Component, OnInit } from '@angular/core';
import {FormState} from '../../../shared/classes/form-state';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-movie-edit-form',
  templateUrl: './movie-edit-form.component.html',
  styleUrls: ['./movie-edit-form.component.scss']
})
export class MovieEditFormComponent extends FormState implements OnInit {

  formGroup = new FormGroup({
    title: new FormControl(''),
    year: new FormControl(''),
    country: new FormControl(''),
    genre: new FormControl(''),
    description: new FormControl('')
  });
  constructor() {
    super();
  }

  ngOnInit() {
  }
}
