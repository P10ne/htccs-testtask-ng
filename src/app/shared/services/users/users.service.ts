import { Injectable } from '@angular/core';
import {IUserToAdd, IUser, IUserToUpdate} from '../../interfaces/user.interface';
import {environment} from '../../../../environments/environment';
import {IResponse} from '../../interfaces/response.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  dir = 'users';

  constructor(private http: HttpClient) { }

  add(user: IUserToAdd): Promise<IResponse> {
    return this.http.post<IResponse>(`${environment.HOST}/${this.dir}`, user).toPromise();
  }

  update(user: IUserToUpdate): Promise<IResponse> {
    return this.http.put<IResponse>(`${environment.HOST}/${this.dir}/${user.id}`, user).toPromise();
  }

  getAll(): Promise<IResponse> {
    return this.http.get<IResponse<IUser[]>>(`${environment.HOST}/${this.dir}`).toPromise();
  }

  remove(id: number): Promise<IResponse> {
    return this.http.delete<IResponse>(`${environment.HOST}/${this.dir}/${id}`).toPromise();
  }
}
