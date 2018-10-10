import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from './country.model';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  selectedCountry : Country = new Country();

  @Output()
  getSelectedCountry = new EventEmitter<Country>();

  countryList : Country[] =[
    {
      code : "IND",
      desc : "India"
    },
    {
      code : "US",
      desc : "United States"
    },
    {
      code : "UK",
      desc : "United Kindom"
    }
  ];

  constructor() { }

  ngOnInit() {
    this.selectedCountry = this.countryList[1];
  }
  setSelectedValue(){
    this.getSelectedCountry.emit(this.selectedCountry);
  }

}
