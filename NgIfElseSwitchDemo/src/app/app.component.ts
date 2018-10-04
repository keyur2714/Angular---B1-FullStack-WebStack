import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ng If Else And Switch Demo'; 
  age : number = 18;
  isEligible;
  per : number = 0;
  grade : string = '';


  ngOnInit(){
    this.checkEligibility();
  }

  checkEligibility():void{    
    if(this.age >= 18){
      this.isEligible = true;
    }else{
      this.isEligible = false;
    }
  }

  calculateGrade():void{
    if(this.per >= 70){
      this.grade = 'Dist';
    }else if(this.per >= 60){
      this.grade = 'First';    
    }else if(this.per >= 50){
      this.grade = 'Second';
    }else if(this.per >= 40){
      this.grade = 'Pass'
    }else{
      this.grade = 'Fail';
    } 
  }


}
