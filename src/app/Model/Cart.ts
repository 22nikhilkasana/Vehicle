export class CartItem{

    cartItemId:number;
    email: string;
    vehicleName: string;
    vehicleModel: string;
    vehiclePrice: number;
    vehicleDescription:string; 
    vehicleImageUrl:string;

    constructor(
         cartItemId: number,
         email: string,
         vehicleName: string,
         vehicleModel: string,
         vehiclePrice: number,
         vehicleDescription:string,
         vehicleImageUrl:string

      ) {
        this.cartItemId=cartItemId;
        this.email=email;
        this.vehicleName=vehicleName;
        this.vehicleModel=vehicleModel;
        this.vehiclePrice=vehiclePrice;
        this.vehicleDescription=vehicleDescription;
        this.vehicleImageUrl=vehicleImageUrl;
        
      }
}  

