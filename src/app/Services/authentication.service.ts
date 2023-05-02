import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  private isLogin= false;
 isAdmin:string='';
  
  setAdmin(){
    this.isAdmin="admin";
  }

  getAdmin(){
    return this.isAdmin;
  }


  login(){
    this.isLogin=true;
    alert(this.isLogin);
  }

  logout(){
    this.isLogin=false;
    alert(this.isLogin);
  }

  loginStatus():boolean{
    return this.isLogin;
  }

  removeToken(){
    localStorage.clear();
  }


}
