import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpRequest, HttpHandler, HttpParams, HttpInterceptor } from '@angular/common/http';
import { take, exhaustMap } from 'rxjs';

@Injectable( )
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.userService.user.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user.token)
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
