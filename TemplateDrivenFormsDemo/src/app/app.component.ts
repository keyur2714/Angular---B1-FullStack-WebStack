import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template Driven Forms';
  nm : string = '';
  isSubmitted : boolean = false;

  save(f){
    console.log(f);
    console.log(f.controls["name"].valid);
    console.log(f.controls["name"].value);
    this.isSubmitted = true;
    this.nm = f.controls["name"].value;
  }
}
