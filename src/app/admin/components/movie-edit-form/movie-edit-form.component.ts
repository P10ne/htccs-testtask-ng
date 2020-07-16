import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ModalConfig} from '../../../shared/classes/modal-config';
import {ModalRef} from '../../../shared/classes/modal-ref';
import {IMovie} from '../../../shared/interfaces/movie.interface';
import {MoviesService} from '../../../shared/services/movies/movies.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {validationMessage} from '../../../shared/utils/validationMessage';

@Component({
  selector: 'app-movie-edit-form',
  templateUrl: './movie-edit-form.component.html',
  styleUrls: ['./movie-edit-form.component.scss']
})
export class MovieEditFormComponent implements OnInit {
  validationMessage = validationMessage;
  public Editor = ClassicEditor;
  movie: IMovie | null;

  _saving: boolean;
  set saving(value) {
    this._saving = value;
  }
  get saving() {
    return this._saving;
  }

  get toUpdate() {
    return this.movie && this.movie.id;
  }

  get toAdd() {
    return !this.toUpdate;
  }



  formGroup = new FormGroup({
    title: new FormControl(
      '',
      [
        Validators.required
      ]
    ),
    year: new FormControl(
      '',
      [
        Validators.required
      ]
    ),
    country: new FormControl(
      '',
      [
        Validators.required
      ]
    ),
    genre: new FormControl(
      '',
      [
        Validators.required
      ]
    ),
    preview: new FormControl(
      [],
      [
        Validators.required
      ]
    ),
    description: new FormControl(
      '',
      [
        Validators.required
      ]
    )
  });
  get title() { return this.formGroup.get('title'); }
  get year() { return this.formGroup.get('year'); }
  get country() { return this.formGroup.get('country'); }
  get genre() { return this.formGroup.get('genre'); }
  get preview() { return this.formGroup.get('preview'); }
  get description() { return this.formGroup.get('description'); }

  isInvalidControl(controlName: string): boolean {
    const control = this.formGroup.get(controlName);
    return control.invalid && control.touched;
  }

  getErrorsControl(controlName: string): ValidationErrors {
    return this.formGroup.get(controlName).errors;
  }

  canSubmit() {
    return !this.formGroup.invalid && !this.formGroup.pending && !this.saving;
  }

  constructor(
    public config: ModalConfig<IMovie>,
    public modal: ModalRef,
    private moviesService: MoviesService
  ) {}

  ngOnInit() {
    this.movie = this.config.data || null;
    if (this.toAdd) {
      this.initToAdd();
    } else if (this.toUpdate) {
      this.initToUpdate();
    }

  }

  initToAdd() {
  }

  initToUpdate() {
    this.title.setValue(this.movie.title);
    this.year.setValue(this.movie.year);
    this.country.setValue(this.movie.country);
    this.genre.setValue(this.movie.genre);
    this.preview.setValue([]);
    this.description.setValue(this.movie.description);
  }

  onClose() {
    this.modal.close('some value');
  }

  async submit() {
    if (this.canSubmit()) {
      this.saving = true;
      if (this.toUpdate) {
        await this.update();
      } else if (this.toAdd) {
        await this.add();
      }
      this.saving = false;
      this.modal.close();
    }
  }

  async add() {
    try {
      const response = await this.moviesService.add({
        title: this.title.value,
        country: this.country.value,
        description: this.description.value,
        genre: this.genre.value,
        year: this.year.value,
        preview: this.preview.value[0]
      });
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }

  async update() {
    try {
      const response = await this.moviesService.update({
        id: this.movie.id,
        title: this.title.value,
        country: this.country.value,
        description: this.description.value,
        genre: this.genre.value,
        preview: this.preview.value[0],
        year: this.year.value
      });
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }

  previewSizeValidator(control: FormControl) {
    const file = control.value[0];
    if (file) {
      if (file.size > 100 * 1024) {
        return {maxSize: true};
      }
      return null;
    }
  }

}
