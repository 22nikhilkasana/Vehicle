import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { CartItem } from '../Model/Cart';
import { NotifierService } from '../Services/notifier.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit{

  totalAmount: any;
  cart:CartItem[]=[];
  constructor(private cartService:CartService, private notifier:NotifierService){}
  ngOnInit(): void {
    this.viewAllCarts();
    this.getCartItemAmount();
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
        this.getCartItemAmount();
      },error=>{
        this.notifier.showNotifications("selected card is not deleted !!", "OK")
      }
    )
  }

  getCartItemAmount(){
    this.cartService.totalAmountOfCartItems().subscribe(
      response=>{
        this.totalAmount=response
        this.notifier.showNotifications("The total amount has been displayed !!", "OK")
      },error=>{
        this.notifier.showNotifications("The total amount not displayed !!", "OK")
      }
    )
  }

  orderItem(){
    alert(" your order has been accepted succesfully and the payable amount is -  "+ this.totalAmount)
  }
}
