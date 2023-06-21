import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(credentials: { email: any; password: any; }): Observable<any> {

    return this.http.post(environment.baseUrl + '/auth/signin', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  register(user: { name: any; email: any; password: any; matchingPassword: any; }): Observable<any> {
    return this.http.post(environment.baseUrl + '/auth/signup', {
      name: user.name,
      email: user.email,
      password: user.password,
      matchingPassword: user.matchingPassword,
      socialProvider: 'LOCAL'
    }, httpOptions);
  }
}
