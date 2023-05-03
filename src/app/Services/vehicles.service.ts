import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VehicleDetails } from '../Model/VehicleInfo';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private httpClient: HttpClient) { }
                            
  baseUrlVehicles: string = "http://localhost:3333/api/vehicle/v1/";

  getVehicleListByUser() {

    let httpHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });
    let requestOptions = { headers: httpHeader }
    return this.httpClient.get(this.baseUrlVehicles + "getUserByEmail",requestOptions);
  }

  getVehicleListByAdmin() {
    let httpHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });
    let requestOptions = { headers: httpHeader }
    return this.httpClient.get(this.baseUrlVehicles + "admin/getAllUsers",requestOptions);
  }


  deleteVehicleByAdmin(vehicleId:number){
    let httpHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt')
    });
    
    let deleteOptions = { headers: httpHeader };
    return this.httpClient.delete(this.baseUrlVehicles + "deleteVehicleById/"+vehicleId);
  }

  updateVehicleByAdmin(vehicleId: number, updatedVehicle: VehicleDetails) {
    let httpHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('jwt'),
      'Content-Type': 'application/json'
    });
  
    alert("service is working");
    let updateOptions = { headers: httpHeader };
    return this.httpClient.put(this.baseUrlVehicles + "updateExistedVehicleDetail/" + vehicleId, updatedVehicle, updateOptions);
  }

                    // http://localhost:3333/api/vehicle/v1/updateExistedVehicleDetail/{id}
}
