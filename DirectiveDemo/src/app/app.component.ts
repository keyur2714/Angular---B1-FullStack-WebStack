import { Component,ViewChild,ElementRef } from '@angular/core';
import { CustomeStyleDirective } from './custome-style.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directive Demo';

  @ViewChild("h")
  h: ElementRef;

  @ViewChild("d")
  d: ElementRef;

  @ViewChild(CustomeStyleDirective)
  customeStyleDirective: CustomeStyleDirective;

  changeColor(color){
    console.log(color);
    this.customeStyleDirective.changeColor(color,this.h);
    this.customeStyleDirective.changeColor(color,this.d);
  }
}
