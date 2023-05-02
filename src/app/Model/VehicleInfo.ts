export class VehicleDetails{

    vehicleId:number;
    vehicleName: string;
    vehicleModel: string;
    vehiclePrice: number;
    vehicleDescription:string;
    vehicleImageUrl:string

    constructor(
        vehicleId:number,
        vehicleName: string,
        vehicleModel: string,
        vehiclePrice: number,
        vehicleDescription: string,
        vehicleImageUrl: string
    ) {
        this.vehicleId=vehicleId;
        this.vehicleName=vehicleName;
        this.vehicleModel=vehicleModel;
        this.vehiclePrice=vehiclePrice;
        this.vehicleDescription=vehicleDescription;
        this.vehicleImageUrl=vehicleImageUrl;
    }
}  


