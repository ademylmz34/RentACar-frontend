import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44343/api/cars/getcardetails";
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<ListResponseModel<Car>>
  {
     return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
  }
}
