import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../Services/login.service';
import { NotifierService } from '../Services/notifier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 

  constructor(private registerService:LoginService,private router: Router,  private notifier:NotifierService){}

  responseData:any;

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    role: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required])
  });
  


  registerUser(){
    this.registerService.signUp(this.registerForm.value).subscribe(
      response=>{
        this.responseData=response;
        this.registerForm.reset();
        this.router.navigateByUrl("/login");
        this.notifier.showNotifications("Registration is Successful  !!", "OK")
      },
      error=>{
        this.notifier.showNotifications("Registration Failed  !!", "OK")
      }
    )
  }

  canExit() {
    const name = this.registerForm.get('name')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    const role = this.registerForm.get('role')?.value;
    const address = this.registerForm.get('address')?.value;
    
    if (name || email || password || role || address) {
      return confirm('Do you really want to leave this page ?');
    } else {
      return true;
    }
  }

  

}
