import { Component, OnInit } from '@angular/core';
import {FormState} from '../../../shared/classes/form-state';
import {FormControl, FormGroup} from '@angular/forms';
import {ModalConfig} from '../../../shared/classes/modal-config';
import {ModalRef} from '../../../shared/classes/modal-ref';
import {ModalService} from '../../../shared/services/modal/modal.service';
import {UserEditFormComponent} from '../user-edit-form/user-edit-form.component';
import {IMovie} from '../../../shared/interfaces/movie.interface';
import {MoviesService} from '../../../shared/services/movies/movies.service';
import {IUser} from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-movie-edit-form',
  templateUrl: './movie-edit-form.component.html',
  styleUrls: ['./movie-edit-form.component.scss']
})
export class MovieEditFormComponent extends FormState implements OnInit {

  movie: IMovie | null;

  formGroup = new FormGroup({
    title: new FormControl(''),
    year: new FormControl(''),
    country: new FormControl(''),
    genre: new FormControl(''),
    preview: new FormControl(''),
    description: new FormControl('')
  });
  get title() { return this.formGroup.get('title'); }
  get year() { return this.formGroup.get('year'); }
  get country() { return this.formGroup.get('country'); }
  get genre() { return this.formGroup.get('genre'); }
  get preview() { return this.formGroup.get('preview'); }
  get description() { return this.formGroup.get('description'); }

  constructor(
    public config: ModalConfig<IMovie>,
    public modal: ModalRef,
    private moviesService: MoviesService
  ) {
    super();
  }

  ngOnInit() {
    this.movie = this.config.data || null;

    this.title.setValue(this.movie.title);
    this.year.setValue(this.movie.year);
    this.country.setValue(this.movie.country);
    this.genre.setValue(this.movie.genre);
    this.preview.setValue(this.movie.imgSrc);
    this.description.setValue(this.movie.description);
  }

  onClose() {
    this.modal.close('some value');
  }

  onSave() {
    console.log(this.formGroup.value);
  }
}
