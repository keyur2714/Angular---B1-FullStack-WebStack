import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css']
})
export class SuccessMessageComponent implements OnInit {

  successMsg : string = "Activity Successful Done...!"

  constructor() { }

  ngOnInit() {
  }

}
