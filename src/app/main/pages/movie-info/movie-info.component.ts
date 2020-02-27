import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {IMovie} from '../../../shared/interfaces/movie.interface';
import {MoviesService} from '../../../shared/services/movies/movies.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

  movieId: number;
  movie: IMovie;
  constructor(
    private locationService: Location,
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute
    )
  {
    this.activatedRoute.params.subscribe(params => {
      this.movieId = params.id;
    });
  }

  ngOnInit() {
    this.initMovie();
  }

  async initMovie() {
    const response = await this.moviesService.getById(this.movieId);
    this.movie = response.content;
  }

  goBack() {
    this.locationService.back();
  }

}
