import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of, from} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthService, IAccessToken} from '../auth/auth.service';
import {getFingerprint} from '../../utils/fingerPrint';
import {ModalService} from '../modal/modal.service';
import {LoginFormComponent} from '../../components/login-form/login-form.component';

export interface IRefreshResponse {
  accessToken: IAccessToken;
  refreshToken: string;
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private modalService: ModalService
  ) {}
  // async/await нельзя применить для intercept при обновлении токенов перед выполнением основного запроса
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('/login') || req.url.includes('/refresh') || req.url.includes('/logout')) {
      return from(this.createRequest(req, next));
    } else {
      return from(this.handle(req, next));
    }

  }


  async handle(req: HttpRequest<any>, next: HttpHandler): Promise<any> {
    if (this.authService.accessToken) {
      // Проверка на expires заранее
      if (Date.now() > this.authService.accessToken.expiresAt - 10000) { // Время действия истекло
        if (this.authService.refreshToken) {
          const refreshBody = {
            fingerPrint: this.authService.fingerPrint,
            refreshToken: this.authService.refreshToken
          };

          const response = await this.authService.refresh(refreshBody);
          this.authService.accessToken = response.content.accessToken;
          this.authService.refreshToken = response.content.refreshToken;

          const authReq = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${this.authService.accessToken.token}`)
          });
          return this.createRequest(authReq, next);
        } else {
          return this.createRequest(req, next);
        }
      } else {
        const authReq = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${this.authService.accessToken.token}`)
        });
        return this.createRequest(authReq, next);
      }
    } else {
      if (this.authService.refreshToken) {
        this.authService.fingerPrint = await getFingerprint();
        const refreshBody = {
          fingerPrint: this.authService.fingerPrint,
          refreshToken: this.authService.refreshToken
        };

        const response = await this.authService.refresh(refreshBody);
        this.authService.accessToken = response.content.accessToken;
        this.authService.refreshToken = response.content.refreshToken;

        const authReq = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${this.authService.accessToken.token}`)
        });
        return this.createRequest(authReq, next);
      } else {
        return this.createRequest(req, next);
      }
    }

  }

  createRequest(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) console.log('Server response');
        },
        err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              console.log('Unauthorized');
              this.authService.logout();
              this.modalService.open(LoginFormComponent, {});
            }
          }
        }
      )
    ).toPromise();
  }
}
