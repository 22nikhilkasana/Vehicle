export class VehicleCartItem{
  
  vehicleCartId:number;
    vehicleName: string;
    vehicleModel: string;
    vehiclePrice: number;
    vehicleDescription:string; 
    vehicleImageUrl:string;

    constructor(
      vehicleCartId:number,
         vehicleName: string,
         vehicleModel: string,
         vehiclePrice: number,
         vehicleDescription:string,
         vehicleImageUrl:string

      ) {
        this.vehicleCartId=vehicleCartId
        this.vehicleName=vehicleName;
        this.vehicleModel=vehicleModel;
        this.vehiclePrice=vehiclePrice;
        this.vehicleDescription=vehicleDescription;
        this.vehicleImageUrl=vehicleImageUrl;
        
      }
}  

