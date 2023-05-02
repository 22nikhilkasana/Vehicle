import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { VehicleViewComponent } from './vehicle-view/vehicle-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { AuthGuard } from './Auth/auth.guard';
import { DeactivateGuard } from './Auth/deactivate.guard';
import { EditCardAdminComponent } from './edit-card-admin/edit-card-admin.component';


const routes: Routes = [


  { path: '', redirectTo: '/login', pathMatch: 'full' },        
  { path: "login", component: LoginComponent },
  { path: "vehicle", component: VehicleViewComponent,canActivate:[AuthGuard]},
  { path: "adminView", component: AdminViewComponent,canActivate:[AuthGuard] },       
  { path: "home", component: HomeComponent ,canActivate:[AuthGuard]},
  { path: "addVehicle", component: AddVehicleComponent,canActivate:[AuthGuard]},
  { path: "adminDetail", component: AdminDetailsComponent, canActivate:[AuthGuard] },
  { path: "register", component: RegisterComponent, canDeactivate:[DeactivateGuard]},
  { path: "viewCart", component: ViewCartComponent, canActivate:[AuthGuard] },
  { path: "editCardByAdmin/:vehicleId", component: EditCardAdminComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
