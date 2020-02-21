import { Injectable } from '@angular/core';
import {IMovie} from '../../interfaces/movie.interface';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  dir = 'movies';

  constructor() { }

  getMovies(): Promise<IMovie[]> {
    return fetch(`${environment.HOST}/${this.dir}`).then(data => data.json());
  }

  getMovie(id: number): Promise<IMovie> {
    return fetch(`${environment.HOST}/${this.dir}/${id}`).then(data => data.json());
  }
}
