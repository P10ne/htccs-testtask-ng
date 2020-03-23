import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {ICommentToAdd} from '../../interfaces/comment.interface';
import {IResponse} from '../../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  dir = 'comments';

  constructor(private http: HttpClient) { }

  add(comment: ICommentToAdd): Promise<IResponse> {
    return this.http.post<IResponse>(`${environment.HOST}/${this.dir}`, {payload: comment}).toPromise();
  }

  get(movieId: number): Promise<IResponse> {
    return this.http.get<IResponse>(`${environment.HOST}/${this.dir}?movieId=${movieId}`).toPromise();
  }

  remove(id: number): Promise<IResponse> {
    return this.http.delete<IResponse>(`${environment.HOST}/${this.dir}/${id}`).toPromise();
  }
}
