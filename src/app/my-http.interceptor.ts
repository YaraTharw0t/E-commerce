import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {


  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      let myHeaders:any ={token:localStorage.getItem('token')}

     request  = request.clone({setHeaders:myHeaders})






    return next.handle(request);
  }
}
