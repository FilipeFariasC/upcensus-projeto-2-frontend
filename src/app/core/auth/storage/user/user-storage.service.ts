import { Injectable } from '@angular/core';
import { SessionStorageService} from 'src/app/shared/service/storage.service';


const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService extends SessionStorageService{

  constructor() {
    super();
  }

  public saveUser(user: any): void {
    this.removeItem(USER_KEY);
    this.setItem(USER_KEY,JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(this.getItem(USER_KEY)as string);
  }

}
