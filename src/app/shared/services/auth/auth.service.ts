import { Injectable } from '@angular/core';
import {IRefreshTokens, IToLogin, IUser} from '../../interfaces/user.interface';
import {IResponse} from '../../interfaces/response.interface';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {getFingerprint} from '../../utils/fingerPrint';
import {IRefreshResponse} from '../auth-interceptor/auth-interceptor.service';
import {BehaviorSubject, Subject} from 'rxjs';

export interface ILoginResponse {
  accessToken: IAccessToken;
  refreshToken: string;
  user: IUser;
}

export interface IAccessToken {
  token: string;
  expiresAt: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  dir = 'auth';

  private _accessToken: IAccessToken | null = null;
  fingerPrint: string | null = null;
  user: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('user')));
  public get accessToken(): IAccessToken {
    return this._accessToken;
  }
  public set accessToken(value: IAccessToken) {
    this._accessToken = value;
  }

  public get refreshToken() {
    return localStorage.getItem('refresh');
  }
  public set refreshToken(value) {
    if(value) {
      localStorage.setItem('refresh', value);
    } else {
      localStorage.removeItem('refresh');
    }

  }

  private setUser(user: IUser) {
    this.user.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }
  public clearUser() {
    this.user.next(null);
    localStorage.removeItem('user');
  }

  constructor(private http: HttpClient) {}

  login(data: IToLogin): Promise<IResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        const loginReqResult = await this.http.post<IResponse<ILoginResponse>>(`${environment.HOST}/${this.dir}/login`, data).toPromise();
        if (loginReqResult.status === 200) {
          this.accessToken = loginReqResult.content.accessToken;
          this.refreshToken = loginReqResult.content.refreshToken;

          this.setUser(loginReqResult.content.user);
          resolve();
        }
      } catch (e) {
        reject(e);
      }
    });
  }

  refresh(data: IRefreshTokens): Promise<IResponse<IRefreshResponse>> {
      return this.http.post<IResponse>(`${environment.HOST}/${this.dir}/refresh`, data).toPromise();
  }

  async logout(): Promise<IResponse> {
    const logoutRequestRes = await this.http.post<IResponse>(`${environment.HOST}/${this.dir}/logout`, null).toPromise();
    this.accessToken = null;
    this.refreshToken = null;
    this.clearUser();
    return logoutRequestRes;
  }
}
