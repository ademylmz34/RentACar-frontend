import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/carImageService/car-image-service.service';
import { CarService } from 'src/app/services/carService/car-service.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars:Car[];
  images:CarImage[];
  

  currentImage: CarImage;

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute,
    private carImageService:CarImageService) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
        if(params["carId"]){
          this.getCarDetails(params["carId"]);
          this.getCarImagesByCarId(params["carId"]);
        }
      })
    }

  getCarDetails(carId:number)
  {
    this.carService.getCarDetails(carId).subscribe(response => {
      this.cars = response.data;
      console.log(response);
    })
  }
  getPath() {
    return this.defaultPath;
  }

  getButtonClass(image: CarImage) {
    if ((image = this.images[0])) {
      return 'active';
    } else {
      return '';
    }
  }

  setCurrentImageClass(image: CarImage) {
    this.currentImage = image;
  }

  getCurrentImageClass(image: CarImage) {
    if (this.images[0] == image) {
      return 'carousel-item active';
    } else {
      return 'carousel-item ';
    }
  }

  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
     this.images=response.data;
     console.log(response);
    })
     
  }

}
