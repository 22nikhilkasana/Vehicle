import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { VehicleCartItem } from '../Model/Cart';
import { NotifierService } from '../Services/notifier.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit{

  totalAmount: any;
  cart:VehicleCartItem[]=[];
  constructor(private cartService:CartService, private notifier:NotifierService){}
  ngOnInit(): void {
    this.viewAllCarts();
   
  }

  viewAllCarts(){
    this.cartService.getCartItemByEmail().subscribe(
      response=>{

        this.cart=response;
        console.log(this.cart);
        this.notifier.showNotifications("cart data according to user is visible !!", "OK")
        
      },
      error=>{
        this.notifier.showNotifications("cart is not visible !!", "OK")
      }
    )
  }


  deleteCartItem(cartId:number){
    this.cartService.deleteCartById(cartId).subscribe(
      response=>{
        this.notifier.showNotifications("card has been deleted !!", "OK")
        this.viewAllCarts();
      },error=>{
        this.notifier.showNotifications("selected card is not deleted !!", "OK")
      }
    )
  }

}
