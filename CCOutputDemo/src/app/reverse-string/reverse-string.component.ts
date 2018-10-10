import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reverse-string',
  templateUrl: './reverse-string.component.html',
  styleUrls: ['./reverse-string.component.css']
})
export class ReverseStringComponent implements OnInit {

  revStr:string = '';

  @Output("revstr") revStrEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  reverseStr(str):void{
    console.log(str.split(""));
    console.log(str.split("").join(''));
    this.revStr = str.split("").reverse().join('');
    this.revStrEvent.emit(this.revStr);
  }

}
