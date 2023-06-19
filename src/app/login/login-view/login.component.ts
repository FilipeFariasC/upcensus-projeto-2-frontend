import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppConstants } from 'src/app/app.constants';
import { AuthService } from 'src/app/core/auth/security/auth.service';
import { TokenStorageService } from 'src/app/core/auth/storage/token/token-storage.service';
import { UserStorageService } from 'src/app/core/auth/storage/user/user-storage.service';
import { UserService } from 'src/app/core/auth/user/user.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  currentUser: any;
  googleURL = AppConstants.GOOGLE_AUTH_URL;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer,private snackBar: MatSnackBar,private authService: AuthService, private tokenStorage: TokenStorageService, private route: ActivatedRoute, private userService: UserService, private userStorageService:UserStorageService) {}

  ngOnInit(): void {
    this.matIconRegistry.addSvgIcon(
      'icone-google',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/icons8-google.svg')
    );

    const token: string = this.route.snapshot.queryParamMap.get('token') as string;
    const error: string = this.route.snapshot.queryParamMap.get('error') as string;
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.currentUser = this.userStorageService.getUser();
    }
    else if(token){
        this.tokenStorage.saveToken(token);
        this.authService.getCurrentUser().subscribe(
              data => {
                this.login(data);
              },
              err => {
                
                this.errorMessage = err.error.message;
                this.isLoginFailed = true;
                this.snackBar.open(err.error.message, "Ok");
              }
          );
    }
    else if(error){
        this.errorMessage = error;
        
        this.isLoginFailed = true;
        this.snackBar.open(error, "Ok");
    }
  }

  onSubmit(): void {
    this.userService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.login(data.user);
      },
      err => {
        
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.snackBar.open(err.error.message, "Ok");
      }
    );
  }

  login(user: any): void {
    this.userStorageService.saveUser(user);
    this.isLoginFailed = false;
    this.isLoggedIn = true;
    this.currentUser = this.userStorageService.getUser();
    window.location.reload();
  }

}
