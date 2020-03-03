import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ModalConfig} from '../../../shared/classes/modal-config';
import {ModalRef} from '../../../shared/classes/modal-ref';
import {IMovie} from '../../../shared/interfaces/movie.interface';
import {MoviesService} from '../../../shared/services/movies/movies.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-movie-edit-form',
  templateUrl: './movie-edit-form.component.html',
  styleUrls: ['./movie-edit-form.component.scss']
})
export class MovieEditFormComponent implements OnInit {

  public Editor = ClassicEditor;
  movie: IMovie | null;
  saving: boolean;
  setSaving(value) {
    this.saving = value;
  }

  get toUpdate() {
    return this.movie && this.movie.id;
  }

  get toAdd() {
    return !this.toUpdate;
  }



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
  ) {}

  ngOnInit() {
    this.movie = this.config.data || null;

    this.title.setValue(this.movie ? this.movie.title : '');
    this.year.setValue(this.movie ? this.movie.year : '');
    this.country.setValue(this.movie ? this.movie.country : '');
    this.genre.setValue(this.movie ? this.movie.genre : '');
    this.preview.setValue(this.movie ? this.movie.imgSrc : '');
    this.description.setValue(this.movie ? this.movie.description : '');
  }

  onClose() {
    this.modal.close('some value');
  }

  async onSave() {
    this.setSaving(true);
    if (this.toUpdate) {
      await this.update();
    } else if (this.toAdd) {
      await this.add();
    }
    this.setSaving(false);
    this.modal.close();
  }

  async add() {
    try {
      const response = await this.moviesService.add({
        title: this.title.value,
        country: this.country.value,
        description: this.description.value,
        genre: this.genre.value,
        imgSrc: this.preview.value,
        year: this.year.value
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
        imgSrc: this.preview.value,
        year: this.year.value
      });
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }
}
