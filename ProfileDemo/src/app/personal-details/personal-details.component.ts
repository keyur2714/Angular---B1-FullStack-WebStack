import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  firstName: string = 'keyur';
  lastName : string = 'Thakor';
  dateOfBirth : string = "27/12/1985";
  gender : string = 'Male';   

  constructor() { }

  ngOnInit() {
  }

}
