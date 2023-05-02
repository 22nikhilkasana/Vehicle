import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { NotifierService } from '../Services/notifier.service';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { AuthenticationService } from '../Services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService, private notfier: NotifierService, private router: Router, private authService: AuthenticationService) { }
  userForm = new FormGroup({
    "email": new FormControl(''),
    "password": new FormControl('')
  })

  responseData: any;

  loginCheck() {

    this.loginService.login(this.userForm.value).subscribe(
      response => {  // response= message + token
        this.responseData = response;

       this.authService.login();
       // store the token in browser storage/local storage
        localStorage.setItem('jwt', this.responseData.Token);
        this.notfier.showNotifications('login Success !! ', 'OK');

         // Retrieve the value of the role from the token
      let token: any = localStorage.getItem('jwt');
      let decodedToken:any = jwt_decode(token);
      
     // alert("decode toke is here "+ decodedToken);
      let roleFromtoken = decodedToken.role;
     

      // Navigate to the required page based on the role
      if (roleFromtoken === 'admin') {
        //this.authService.setAdmin();
        this.router.navigateByUrl('/adminView');
        
        
      } else {
        this.router.navigateByUrl('/home');
      }
      },
      error => {
        this.notfier.showNotifications("User does not exist with this credentials !! ", 'OK')
        //alert("User does not exist with this credentials");
      }
    )
  }
}
