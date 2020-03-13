import {Component, OnInit} from '@angular/core';
import {IMovie} from '../../../shared/interfaces/movie.interface';
import {MoviesService} from '../../../shared/services/movies/movies.service';
import {ModalService} from '../../../shared/services/modal/modal.service';
import {MovieEditFormComponent} from '../../components/movie-edit-form/movie-edit-form.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss', '../../admin.scss']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[];
  searchValue = '';

  constructor(
    private moviesService: MoviesService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.initMovies();
  }

  updateSearchValue(newValue: string): void {
    this.searchValue = newValue;
    console.log(this.searchValue);
  }

  async initMovies() {
    const response = await this.moviesService.getAll();
    this.movies = response.content;
  }

  openModalToAddMovie() {
    this.modalService.open(MovieEditFormComponent, {title: 'Добавить фильм'});
    // todo подписка на закрытие и обновление списка
  }
}
