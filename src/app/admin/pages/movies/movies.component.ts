import {Component, OnInit} from '@angular/core';
import {IMovie} from '../../../shared/interfaces/movie.interface';
import {MoviesService} from '../../../shared/services/movies/movies.service';
import {ModalService} from '../../../shared/services/modal/modal.service';
import {MovieEditFormComponent} from '../../components/movie-edit-form/movie-edit-form.component';
import {LoadingService, LoadKeys} from '../../../shared/services/loading/loading.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[];

  constructor(
    private moviesService: MoviesService,
    private modalService: ModalService,
    private loadService: LoadingService
  ) { }

  ngOnInit() {
    this.initMovies();
  }

  async initMovies() {
    const response = await this.moviesService.getAll();
    this.movies = response.content;
  }

  openModalToAddMovie() {
    this.modalService.open(MovieEditFormComponent, {});
    // todo подписка на закрытие и обновление списка
  }
}
