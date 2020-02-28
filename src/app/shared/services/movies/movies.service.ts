import { Injectable } from '@angular/core';
import {IMovie, IMovieToAdd, IMovieToUpdate} from '../../interfaces/movie.interface';
import {environment} from '../../../../environments/environment';
import {IResponse} from '../../interfaces/response.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  dir = 'movies';

  constructor(private http: HttpClient) { }

  add(movie: IMovieToAdd): Promise<IResponse> {
    return this.http.post<IResponse>(`${environment.HOST}/${this.dir}`, movie).toPromise();
  }

  update(movie: IMovieToUpdate): Promise<IResponse> {
    return this.http.put<IResponse>(`${environment.HOST}/${this.dir}/${movie.id}`, movie).toPromise();
  }

  getAll(): Promise<IResponse> {
    return this.http.get<IResponse>(`${environment.HOST}/${this.dir}`).toPromise();
  }

  getById(id: number): Promise<IResponse> {
    return this.http.get<IResponse>(`${environment.HOST}/${this.dir}/${id}`).toPromise();
  }

  delete(id: number): Promise<IResponse> {
    return this.http.delete<IResponse>(`${environment.HOST}/${this.dir}/${id}`).toPromise();
  }
}
