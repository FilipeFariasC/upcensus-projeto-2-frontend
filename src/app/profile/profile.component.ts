import { Component,OnInit } from '@angular/core';
import { UserStorageService } from '../core/auth/storage/user/user-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(private userStorage: UserStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.userStorage.getUser();
  }
}
