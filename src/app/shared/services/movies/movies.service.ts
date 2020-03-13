import { Injectable } from '@angular/core';
import {IMovie, IMovieToAdd, IMovieToUpdate} from '../../interfaces/movie.interface';
import {environment} from '../../../../environments/environment';
import {IResponse} from '../../interfaces/response.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  dir = 'movies';

  constructor(private http: HttpClient) { }

  // todo
  add(movie: IMovieToAdd): Promise<IResponse> {
    console.log(movie);
    const formData = new FormData();
    formData.append('title', movie.title);
    formData.append('year', movie.year.toString());
    formData.append('genre', movie.genre);
    formData.append('description', movie.description);
    formData.append('country', movie.country);
    formData.append('preview', movie.preview, movie.preview.name);
    return this.http.post<IResponse>(`${environment.HOST}/${this.dir}`, formData).toPromise();
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
