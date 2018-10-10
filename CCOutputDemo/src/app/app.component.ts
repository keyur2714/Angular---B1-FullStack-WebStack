import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@Output Demo';

  msg : string = '';
  newMsg : string = "";
  countryDesc : string = '';

  originalString : string = 'keyur';
  revStr : string = '';

  getMessage(newMsg):void{
    this.newMsg = newMsg;
  }

  getRevStr(revStr):void{
    this.revStr = revStr;
  }

  checkPalindrom(){
    console.log(this.revStr);
    console.log(this.originalString);
    if(this.revStr === this.originalString){
      this.msg = "String is Palindrom...!";
    }else{
      this.msg = "String is not Palindrom...!";
    }
  }

  selectedCountry(country){
    this.countryDesc = country.desc;
  }
}
