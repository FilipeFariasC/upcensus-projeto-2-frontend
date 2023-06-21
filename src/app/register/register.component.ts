import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from '../core/auth/user/user.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  googleURL = environment.baseUrl+environment.oAuth2Url+"/google"+environment.redirectAuth;

  constructor(private snackBar: MatSnackBar,private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer,private userService: UserService) { }

  ngOnInit(): void {
    this.matIconRegistry.addSvgIcon(
      'icone-google',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/icons8-google.svg')
    );
  }

  onSubmit(): void {
    this.userService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        this.snackBar.open(err.error.message, "Ok");
      }
    );
  }
}
