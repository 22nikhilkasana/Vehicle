import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  private isLogin= false;
 
  


  login(){
    this.isLogin=true;
    alert(this.isLogin);
  }

  logout(){
    this.isLogin=false;
    
  }

  loginStatus():boolean{
    return this.isLogin;
  }

  removeToken(){
    localStorage.clear();
  }


}
