import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../storage/token/token-storage.service';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private tokenStorageService:TokenStorageService) { }


  isLoggedIn():boolean{
    return !!this.tokenStorageService.getToken();
  }



  getPublicContent(): Observable<any> {
    return this.http.get(environment.baseUrl+ '/all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(environment.baseUrl+ '/user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(environment.baseUrl+ '/mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(environment.baseUrl+ '/admin', { responseType: 'text' });
  }

  getCurrentUser(): Observable<any> {
    return this.http.get(environment.baseUrl+ '/user/me', httpOptions);
  }
}
