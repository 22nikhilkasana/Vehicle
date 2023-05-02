import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../Model/CompanyInfo';

@Injectable({
  providedIn: 'root'
})
export class AddVehicleService {

  constructor(private httpClient:HttpClient) { }

  baseUrl :string="http://localhost:3333/api/vehicle/v1/";

 // http://localhost:3333/api/vehicle/v1/updateVehicleDetails
  addNewVehicle(VehicleData:any){
    return  this.httpClient.put(this.baseUrl+"updateVehicleDetails",VehicleData,{responseType: 'text'});
  }
}
