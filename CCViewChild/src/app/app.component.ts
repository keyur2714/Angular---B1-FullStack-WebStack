import { Component,ViewChild,ElementRef } from '@angular/core';
import { StringUtil } from './string-util.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@View Childl';

  @ViewChild("str")
  st: ElementRef;

  @ViewChild("welcomeMsg")
  welcomeMsg: ElementRef;

  result : string = '';

  @ViewChild(StringUtil)
  stringUtilComponent : StringUtil;

  convert(str:string,operation:string):void{
    str = this.st.nativeElement.value;
    console.log(this.st);
    console.log(this.st+" "+str);    
    switch(operation){
      case 'U' :
        this.result = this.stringUtilComponent.convertUpperCase(str);
        break;
      case 'L' :
        this.result = this.stringUtilComponent.convertLowerCase(str);
        break;
      case 'R' :
        this.result = this.stringUtilComponent.getReverseString(str);
        break;  
    }
    this.st.nativeElement.value = 'keyur';  
    console.log(this.welcomeMsg.nativeElement.innerHTML);
  }

}
