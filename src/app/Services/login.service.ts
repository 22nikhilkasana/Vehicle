import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  baseUrl :string="http://localhost:2222/api/user/v1/";

  login(loginData: any){
    return this.httpClient.post(this.baseUrl+"loginUser",loginData);
  }

  signUp(registerData:any){
    return  this.httpClient.post(this.baseUrl+"registerUser",registerData,{responseType: 'text'});
  }

}
