import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from '../Model/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient:HttpClient) {}

  

  //http://localhost:5555/api/cart/v1/addVehicleCart
  baseUrl:string="http://localhost:5555/api/cart/v1/"

  addToCart(cartItems:CartItem){
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
    return this.httpClient.get<CartItem[]>(this.baseUrl + "getCartListOfUser", options);
  }

  deleteCartById(cartId:number){
    let httpHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });
    
    let deleteOptions = { headers: httpHeader };
    return this.httpClient.delete(this.baseUrl + "deleteCartById/"+cartId, deleteOptions);
  }

  totalAmountOfCartItems(){
    let httpHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });
    
    let amountOptions = { headers: httpHeader };
    return this.httpClient.get(this.baseUrl + "getTotalAmountOfCartItems", amountOptions);
  }
  
  }


