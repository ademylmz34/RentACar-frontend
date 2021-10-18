import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ListResponseModel } from 'src/app/models/listResponseModel';

import { Car } from 'src/app/models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44343/api/";
  constructor(private httpClient:HttpClient) { }

  getCarDetails(carId:number):Observable<ListResponseModel<Car>>
  {
    let newPath=this.apiUrl+"cars/getcardetails?carId="+carId
     return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getallbybrandId?brandId="+id
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(id:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getallbycolorId?colorId="+id
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
}
