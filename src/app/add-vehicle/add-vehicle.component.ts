import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddVehicleService } from '../Services/add-vehicle.service';
import { VehicleDetails } from '../Model/VehicleInfo';
import { NotifierService } from '../Services/notifier.service';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent {

  constructor(private addService: AddVehicleService, private router: Router, private notifier: NotifierService) { }

  vehicleDetailsForm = new FormGroup({
    "vehicleId": new FormControl('', [Validators.required]),
    "vehicleName": new FormControl('', [Validators.required]),
    "vehicleDescription": new FormControl('', [Validators.required]),
    "vehicleModel": new FormControl('', [Validators.required]),
    "vehiclePrice": new FormControl('', [Validators.required]),
    "vehicleImageUrl": new FormControl('', [Validators.required]),
  })


  vehicleData: any;

  addVehicleData() {
    let token: any = localStorage.getItem('jwt');
    let decodedToken: any = jwt_decode(token);


    let roleFromtoken = decodedToken.role;
    if (roleFromtoken === 'admin') {
      this.addVehicle();
    }
    else {
      this.notifier.showNotifications("you are not authorized to add vehicle data", "OK");
      this.router.navigateByUrl("/home");
    }
  }



  addVehicle() {

    const vehicleDetails: VehicleDetails = {
      vehicleName: this.vehicleDetailsForm.get('vehicleName')?.value ?? '',
      vehicleModel: this.vehicleDetailsForm.get('vehicleModel')?.value ?? '',
      vehiclePrice: parseInt(this.vehicleDetailsForm.get('vehiclePrice')?.value || '0'),
      vehicleDescription: this.vehicleDetailsForm.get('vehicleDescription')?.value ?? '',
      vehicleImageUrl: this.vehicleDetailsForm.get('vehicleImageUrl')?.value ?? '',
      vehicleId: parseInt(this.vehicleDetailsForm.get('vehicleId')?.value || '0'),
    };



    const companyData = {
      companyId: 1,
      companyName: "TATA",
      vehicleDetails: [vehicleDetails]
    };

    this.addService.addNewVehicle(companyData).subscribe(
      response => {
        this.vehicleData = response;
        this.notifier.showNotifications("Vehicle Data has been added successfully !! ", "OK")
        this.vehicleDetailsForm.reset();
        this.router.navigateByUrl("/vehicle");
      },
      error => {
        this.notifier.showNotifications("Vehicle Data Not Added !! ", "OK")
      }
    )
  }
}
