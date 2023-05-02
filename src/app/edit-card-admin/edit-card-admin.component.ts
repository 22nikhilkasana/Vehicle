import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../Services/vehicles.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-edit-card-admin',
  templateUrl: './edit-card-admin.component.html',
  styleUrls: ['./edit-card-admin.component.css']
})
export class EditCardAdminComponent implements OnInit {

  constructor(private vehiclesService: VehiclesService, private actRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }

  id: any;

  editForm: any;

  ngOnInit(): void {



    this.actRoute.paramMap.subscribe(params => {
      this.id = params.get('vehicleId');
      alert(this.id);
    });


    this.editForm = this.formBuilder.group({
      vehicleName: ['', Validators.required],
      vehicleModel: ['', Validators.required],
      vehiclePrice: ['', Validators.required],
      vehicleDescription: ['', Validators.required],
      vehicleImageUrl: ['', Validators.required]
    });
  }

  onSubmit() {
    alert("methdo working");
    this.vehiclesService.updateVehicleByAdmin(this.id, this.editForm.value)
      .subscribe(
        data => {
          alert("subscribe methdo working");
          alert("Vehicle updated successfully !!");
          this.router.navigate(['/home']);   //this functionality have to changhe
        },
        error => {
          console.error(error)
          alert("error methdo working");
        }
      );
  }

  editVehicleData(){
    let token: any = localStorage.getItem('jwt');
    let decodedToken:any = jwt_decode(token);

    
    let roleFromtoken = decodedToken.role;
    if (roleFromtoken === 'admin') {
      this.onSubmit();
    }
    else{
      alert("you are not authorized to add vehicle data !!");
      this.router.navigateByUrl("/home");
    }
   }


}
