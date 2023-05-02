import { VehicleDetails } from "./VehicleInfo";

export class Company{
    companyId: number;
    companyName: string;
    companyMobileNumber:number;
    vehicleDetails:VehicleDetails[]
    
    constructor(
         companyId: number,
         companyName: string,
         companyMobileNumber: number,
         vehicleDetails: VehicleDetails[]
      ) {
        this.companyId=companyId;
        this.companyName=companyName;
        this.companyMobileNumber=companyMobileNumber;
        this.vehicleDetails=vehicleDetails;
      }
}  

