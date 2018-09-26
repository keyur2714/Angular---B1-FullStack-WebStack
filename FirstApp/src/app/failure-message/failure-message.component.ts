import { Component } from '@angular/core';
@Component({
    selector : 'app-fail-msg',
    template : `<h1>{{failMsg}}</h1>`,
    styles : ['h1{color : blue}']
})
export class FailureMessageComponent {
    failMsg : string = "Activity Failed...!";
}