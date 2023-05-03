import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../Services/vehicles.service';
import { NotifierService } from '../Services/notifier.service';

@Component({
  selector: 'app-vehicle-view',
  templateUrl: './vehicle-view.component.html',
  styleUrls: ['./vehicle-view.component.css']
})
export class VehicleViewComponent implements OnInit{

  constructor(private vehicleService:VehiclesService, private notifier:NotifierService){}
 

  responseData:any;
 
  

  ngOnInit(): void {
    this.vehicleService.getVehicleListByAdmin().subscribe(
      response=>{
        this.responseData=response;
        //console.log("data in response "+this.responseData);
        
      },error=>{
        this.notifier.showNotifications("Data is not loaded.May be You are not Admin !!", "OK")
      }
    )
  }

  
    deleteCard(cardId:number){
      alert(cardId);
      this.vehicleService.deleteVehicleByAdmin(cardId).subscribe(
        response=>{

          this.notifier.showNotifications("card has been deleted !!", "OK")
          
        },error=>{
          this.notifier.showNotifications("selected card is not deleted !!", "OK")
        }
      )
    }

  
}
