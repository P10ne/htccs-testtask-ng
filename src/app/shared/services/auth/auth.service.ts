import { Injectable } from '@angular/core';
import {IToLogin} from '../../interfaces/user.interface';
import {IResponse} from '../../interfaces/response.interface';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  dir = 'auth';
  constructor(private http: HttpClient) { }

  login(data: IToLogin): Promise<IResponse> {
    return this.http.post<IResponse>(`${environment.HOST}/${this.dir}/login`, data).toPromise();
  }

  logout(): Promise<IResponse> {
    return this.http.post<IResponse>(`${environment.HOST}/${this.dir}/logout`, null).toPromise();
  }
}
