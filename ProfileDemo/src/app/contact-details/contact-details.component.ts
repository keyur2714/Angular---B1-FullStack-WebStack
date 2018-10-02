import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  //Old way to create object
  // contact = {
  //   email : "keyurjava27@gmail.com",
  //   mobileNo: "7387029671"
  // };

  contact : Contact = new Contact();  
  constructor() { }

  ngOnInit() {
    this.contact.email = "keyurjava27@gmail.com";
    this.contact.mobileNo = "7387209671";    
  }

}
