import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rentalService/rental-service.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  rentalDetails:Rental[]=[];
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalDetails()
  }

  getRentalDetails()
  {
      this.rentalService.getRentalDetails().subscribe(response=>
        {
          this.rentalDetails=response.data
        })
  }
}
