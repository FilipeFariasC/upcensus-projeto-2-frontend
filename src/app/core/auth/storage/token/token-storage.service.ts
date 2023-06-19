import { Injectable } from '@angular/core';
import { SessionStorageService } from 'src/app/shared/service/storage.service';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService extends SessionStorageService{
  constructor() {
    super();
  }

  signOut(): void {
    this.clear();
  }

  public saveToken(token: string): void {
    this.removeItem(TOKEN_KEY);
    this.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return this.getItem(TOKEN_KEY) as string;
  }

  public saveUser(user: any): void {
    this.removeItem(USER_KEY);
    this.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(this.getItem(USER_KEY)as string) ;
  }
}
