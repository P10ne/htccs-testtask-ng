import { Injectable } from '@angular/core';
import {IUserToAdd, IUser, IUserToUpdate} from '../../interfaces/user.interface';
import {environment} from '../../../../environments/environment';
import {IResponse} from '../../interfaces/response.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  dir = '/users';

  constructor(private http: HttpClient) { }

  add(user: IUserToAdd): Promise<IResponse> {
    return this.http.post<IResponse>(`${this.dir}`, user).toPromise();
  }

  update(user: IUserToUpdate): Promise<IResponse> {
    return this.http.put<IResponse>(`${this.dir}/${user.id}`, user).toPromise();
  }

  getAll(): Promise<IResponse> {
    return this.http.get<IResponse<IUser[]>>(`${this.dir}`).toPromise();
  }

  remove(id: number): Promise<IResponse> {
    return this.http.delete<IResponse>(`${this.dir}/${id}`).toPromise();
  }

  isUserExist(login: string): Promise<IResponse> {
    return this.http.get<IResponse>(`${this.dir}?login=${login}`).toPromise();
  }
}
