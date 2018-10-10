import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  msg: string = "Hello!!!";

  @Output()
  getFormattedMsg = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.msg = this.msg + "Good Morning...!";
    this.getFormattedMsg.emit(this.msg);
  }

}
