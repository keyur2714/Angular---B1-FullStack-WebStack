import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Profile Demo';
  flag = true;
  sayHello(age:string):void{
    console.log("Hello Radhe Krishna...!"+age);    
  }
}
