import { Component } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Forms Demo';

  userForm = new FormGroup({
    name : new FormControl('Keyur',Validators.required),
    city: new FormControl('',Validators.required),
    age: new FormControl()
  });

  save():void{
    console.log(this.userForm.value);
    console.log(this.userForm.get('name').value);
  }

}
