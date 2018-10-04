// DOES NOT WORK - need to figure out why
// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
// import { AuthService } from './../auth/auth.service';
//
// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//
//   constructor(private auth: AuthService) {}
//
//   intercept(req: HttpRequest<any>, next: HttpHandler) {
//     // Clone the request and replace the original headers with
//     // cloned headers, updated with the authorization.
//     console.log(this.auth.getAccessToken())
//     const authReq = req.clone({
//       headers: req.headers.set('Token', this.auth.getAccessToken())
//     });
//
//     // send cloned request with header to the next handler.
//     return next.handle(authReq);
//   }
// }
