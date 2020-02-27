import { Injectable } from '@angular/core';
import {IMovie} from '../../interfaces/movie.interface';
import {environment} from '../../../../environments/environment';
import {IResponse} from '../../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  dir = 'movies';

  constructor() { }

  getAll(): Promise<IResponse> {
    return fetch(`${environment.HOST}/${this.dir}`).then(data => data.json());
  }

  getById(id: number): Promise<IResponse> {
    return fetch(`${environment.HOST}/${this.dir}/${id}`).then(data => data.json());
  }

  delete(id: number): Promise<IResponse> {
    return fetch(`${environment.HOST}/${this.dir}/${id}`, {method: 'DELETE'}).then(data => data.json());
  }
}
