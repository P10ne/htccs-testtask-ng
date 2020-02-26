import { Component, OnInit } from '@angular/core';
import {FormState} from '../../../shared/classes/form-state';
import {FormControl, FormGroup} from '@angular/forms';
import {ModalConfig} from '../../../shared/classes/modal-config';
import {ModalRef} from '../../../shared/classes/modal-ref';
import {ModalService} from '../../../shared/services/modal/modal.service';
import {UserEditFormComponent} from '../user-edit-form/user-edit-form.component';
import {IMovie} from '../../../shared/interfaces/movie.interface';

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
  get title() { return this.formGroup.get('title'); }
  get year() { return this.formGroup.get('year'); }
  get country() { return this.formGroup.get('country'); }
  get genre() { return this.formGroup.get('genre'); }
  get description() { return this.formGroup.get('description'); }

  constructor(public config: ModalConfig<IMovie>, public modal: ModalRef) {
    super();
  }

  ngOnInit() {
    this.title.setValue(this.config.data.title);
    this.year.setValue(this.config.data.year);
    this.country.setValue(this.config.data.country);
    this.genre.setValue(this.config.data.genre);
    this.description.setValue(this.config.data.description);
  }

  onClose() {
    this.modal.close('some value');
  }
}
