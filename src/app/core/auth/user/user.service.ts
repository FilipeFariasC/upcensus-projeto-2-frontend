import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../../../app.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(credentials: { name: any; password: any; }): Observable<any> {
    return this.http.post(AppConstants.AUTH_API + 'signin', {
      email: credentials.name,
      password: credentials.password
    }, httpOptions);
  }

  register(user: { name: any; email: any; password: any; matchingPassword: any; }): Observable<any> {
    return this.http.post(AppConstants.AUTH_API + 'signup', {
      displayName: user.name,
      email: user.email,
      password: user.password,
      matchingPassword: user.matchingPassword,
      socialProvider: 'LOCAL'
    }, httpOptions);
  }
}
