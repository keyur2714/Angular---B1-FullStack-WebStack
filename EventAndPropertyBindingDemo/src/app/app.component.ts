import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event And Property Bindings...!';

  friendsList : string[] = ["keyur","denish","vinit"];

  cityList : string[] = ["pune","surat","mumbai"];

  cityObjList = [
    {
    "code":"PN",
    "desc":"Pune"
    },
    {
    "code":"SRT",
    "desc":"Surat"
    },
    {
    "code":"MB",
    "desc":"Mumbai"
    }
];

  selectedCity : string = '';

  addFriend(friendName:string){
    this.friendsList.push(friendName);
  }

  delete(idx:number):void{
    console.log(idx);
    this.friendsList.splice(idx,1);
  }

  setSelectedCity(city):void{
    this.selectedCity = city;
  }

  txtChange(friendName):void{
    console.log(friendName);
  }
}
