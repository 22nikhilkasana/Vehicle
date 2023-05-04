import { Component, OnInit } from '@angular/core';
import { HomeService } from '../Services/home.service';
import { Company } from '../Model/CompanyInfo';
import { CartService } from '../Services/cart.service';
import { VehicleCartItem } from '../Model/Cart';
import { VehicleDetails } from '../Model/VehicleInfo';
import { NotifierService } from '../Services/notifier.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  companies?: Company[];

  resp: any;
  formBuilder: any;
  constructor(private homeService: HomeService,private notfier: NotifierService, private cartService: CartService) { }


  ngOnInit(): void {
    
    this.getAllCompanyData();
  }

  getAllCompanyData() {
    this.homeService.viewVehiclesData().subscribe(
      response => {
        this.companies = response;
        console.log(this.companies);
      }, error => {
        this.notfier.showNotifications("all data is not coming", "OK")
      }
    )
  }


  
  addCart(vehicle: VehicleDetails) {
    const vehicleCartItem: VehicleCartItem = {
      vehicleCartId: 0,
      vehicleName: vehicle.vehicleName,
      vehicleModel: vehicle.vehicleModel,
      vehiclePrice: vehicle.vehiclePrice,
      vehicleDescription: vehicle.vehicleDescription,
      vehicleImageUrl: vehicle.vehicleImageUrl
    };
    this.cartService.addToCart(vehicleCartItem).subscribe(response => {
      console.log(response);
      alert("Vehicle added to cart successfully");
    }, 
    error=>{
      console.log(error);
    });
  }
  
}
