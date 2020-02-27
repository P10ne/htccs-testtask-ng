import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from '../../../shared/interfaces/movie.interface';
import {MoviesService} from '../../../shared/services/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.initMovies();
  }

  async initMovies() {
    const response = await this.moviesService.getAll();
    this.movies = response.content;
  }

}
