import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/carService/car-service.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  currentCar:Car;

  defaultPath = 'https://localhost:44324';
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"]);
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"]);
      }
  
    })
  }
  
  getCarsByBrand(id:number) 
  {
     this.carService.getCarsByBrand(id).subscribe(response=>
      {
        this.cars=response.data
      })
      
  }

  getCarsByColor(id:number) 
  {
     this.carService.getCarsByColor(id).subscribe(response=>
      {
        this.cars=response.data
      })
      
  }
  getCarClass(car:Car){

    if(car == this.currentCar){
      return "table-info cursorPointer"
    }else{
      return "cursorPointer"
    }
  }

  setCurrentCar(car:Car){
    this.currentCar=car;
  }
  
}
