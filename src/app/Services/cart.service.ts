import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleCartItem } from '../Model/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) {}

  

  //http://localhost:5555/api/cart/v1/addVehicleCart
  baseUrl:string="http://localhost:5555/api/cart/v1/"

  addToCart(cartItems:VehicleCartItem){
    let httpHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });
    let requestOptions = { headers: httpHeader };
    return  this.httpClient.put("http://localhost:5555/api/cart/v1/addVehicleCart",cartItems,requestOptions);
  }



  getCartItemByEmail(){
    let httpHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });
    
    let options = { headers: httpHeader };
    return this.httpClient.get<VehicleCartItem[]>("http://localhost:5555/api/cart/v1/getVehicleFromCart", options);
  }

  deleteCartById(vehicleCartId:number){
    let httpHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });
    
    let deleteOptions = { headers: httpHeader };
    return this.httpClient.delete("http://localhost:5555/api/cart/v1/deleteVehicleFromCart/"+vehicleCartId, deleteOptions);
  }

  
  }


