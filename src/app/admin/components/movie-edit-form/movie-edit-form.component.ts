import { Component, OnInit } from '@angular/core';
import {FormState} from '../../../shared/classes/form-state';
import {FormControl, FormGroup} from '@angular/forms';
import {ModalConfig} from '../../../shared/classes/modal-config';
import {ModalRef} from '../../../shared/classes/modal-ref';

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
  constructor(public config: ModalConfig, public modal: ModalRef) {
    super();
  }

  ngOnInit() {
    console.log(this.config.data);
  }

  onClose() {
    this.modal.close('some value');
  }
}
