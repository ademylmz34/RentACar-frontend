import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car/car-detail/car-detail/car-detail.component';
import { CarComponent } from './components/car/car/car.component';
import { RentalComponent } from './components/rental/rental.component';



const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brands/:brandId",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/details/:carId",component:CarDetailComponent},
  {path:"cars/colors/:colorId",component:CarComponent},
  {path:"rentals",component:RentalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }