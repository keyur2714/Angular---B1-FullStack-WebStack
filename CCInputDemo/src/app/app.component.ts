import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@InputDemo';
  myMessage : string = "Good Morning...!";

  errorMessage : string = "Ohh ! Sorry but it's wrong.";
}
