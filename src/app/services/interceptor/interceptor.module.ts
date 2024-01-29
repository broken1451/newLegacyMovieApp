import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable()
export class InterceptorMovies implements HttpInterceptor {

  constructor() {}

  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let headers: any = request.headers;
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Access-Control-Allow-Methods', 'POST,GET,DELETE,PATCH');
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Authorization', `Bearer ${environment.token_access}`);

    let modifiedReq: any;
    if (request.url.includes('/movie')) {
       modifiedReq = request.clone({ 
        headers: request.headers
          .set('Content-type', 'application/json')
          .set('Authorization', `Bearer ${environment.token_access}`) 
          .set('Accept', 'application/json'),
      });
    } else {
      modifiedReq = request.clone({ headers });
    }

    console.log(`Intercept service: ${request?.url}, method: ${request?.method}`);
    return next.handle(modifiedReq);
  }
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorMovies, multi: true }
  ]
})
export class InterceptorModule { }
