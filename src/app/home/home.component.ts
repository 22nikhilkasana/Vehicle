import { Component, OnInit } from '@angular/core';
import { HomeService } from '../Services/home.service';
import { Company } from '../Model/CompanyInfo';
import { CartService } from '../Services/cart.service';
import { CartItem } from '../Model/Cart';
import { VehicleDetails } from '../Model/VehicleInfo';
import jwt_decode from "jwt-decode";
import { NotifierService } from '../Services/notifier.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  companies?: Company[];

  resp: any;
  email: string = '';
  constructor(private homeService: HomeService,private notfier: NotifierService, private cartService: CartService) { }
  ngOnInit(): void {
    this.getAllCompanyData();
  }

  getAllCompanyData() {
    this.homeService.viewVehiclesData().subscribe(
      response => {
        this.companies = response;
        console.log(this.companies)
        let token: any = localStorage.getItem('jwt');
        let decodedToken: any = jwt_decode(token);
        let email1 = decodedToken.email;
        this.email = email1;
      }, error => {
        this.notfier.showNotifications("all data is not coming", "OK")
      }
    )
  }


  addVehicleToCart(data: VehicleDetails) {
    let cartItem = new CartItem(0,
      this.email,
      data.vehicleName,
      data.vehicleModel,
      data.vehiclePrice,
      data.vehicleDescription,
      data.vehicleImageUrl)

    //console.log(this.email);

    this.cartService.addToCart(cartItem).subscribe(
      response => {
        this.resp = response;
        console.log(this.resp);
        this.notfier.showNotifications("cart added successfully", "OK"); 
      }, error => {
        this.notfier.showNotifications("cart not added", "OK")
      }
    )
  }
}
