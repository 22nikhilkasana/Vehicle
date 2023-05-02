import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../Model/CompanyInfo';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  baseUrl:string="http://localhost:3333/api/vehicle/v1/getVehiclesDetails"

  viewVehiclesData(): Observable<Company[]>{
    return this.httpClient.get<Company[]>(this.baseUrl);
  }
}
