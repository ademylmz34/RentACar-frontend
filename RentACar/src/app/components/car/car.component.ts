import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/carService/car-service.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  carDetails:Car[]=[];
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getcarDetails()
  }
  getcarDetails()
  {
      this.carService.getCarDetails().subscribe(response=>
        {
          this.carDetails=response.data
        })
  }
}
