import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { LoginService } from '../Services/login.service';
import { NotifierService } from '../Services/notifier.service';
import { AuthenticationService } from '../Services/authentication.service';


@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit{


  constructor(private router:Router,private notifier:NotifierService, private loginService:LoginService, private authService: AuthenticationService){}

  address:any;
  name:any;
  email:any;
  role:any;
  ngOnInit(): void {

    let token: any = localStorage.getItem('jwt');
      let decodedToken:any = jwt_decode(token);

       this.name=decodedToken.name;
       this.address= decodedToken.address;
       this.email = decodedToken.email;
       this.role = decodedToken.role;
       console.log(decodedToken);
     // alert("decode toke is here "+ decodedToken);  
      }

      logOutFromApp(){
        
         this.authService.logout();  // for msg change in guard
         this.authService.removeToken();
         this.notifier.showNotifications("applicant successfully logged out !!", "OK");
         this.router.navigateByUrl("/login");
      }
  }

 