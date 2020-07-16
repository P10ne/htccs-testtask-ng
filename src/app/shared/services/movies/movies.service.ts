import { Injectable } from '@angular/core';
import {IMovie, IMovieToAdd, IMovieToUpdate} from '../../interfaces/movie.interface';
import {environment} from '../../../../environments/environment';
import {IResponse} from '../../interfaces/response.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  dir = '/movies';

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
    return this.http.post<IResponse>(`${this.dir}`, formData).toPromise();
  }

  update(movie: IMovieToUpdate): Promise<IResponse> {
    const formData = new FormData();
    // @ts-ignore
    formData.append('id', movie.id);
    formData.append('title', movie.title);
    formData.append('year', movie.year.toString());
    formData.append('genre', movie.genre);
    formData.append('description', movie.description);
    formData.append('country', movie.country);
    formData.append('preview', movie.preview, movie.preview.name);
    return this.http.put<IResponse>(`${this.dir}/${movie.id}`, formData).toPromise();
  }

  getAll(): Promise<IResponse> {
    return this.http.get<IResponse>(`${this.dir}`).toPromise();
  }

  getById(id: number): Promise<IResponse> {
    return this.http.get<IResponse>(`${this.dir}/${id}`).toPromise();
  }

  delete(id: number): Promise<IResponse> {
    return this.http.delete<IResponse>(`${this.dir}/${id}`).toPromise();
  }
}
