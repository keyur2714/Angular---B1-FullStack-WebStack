import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {

  student : Student = new Student();
  isSubmitted :boolean = false;

  constructor() { }

  ngOnInit() {
    this.student.rollNo = 1;
  }

  save(){
    console.log(this.student.rollNo);
    this.isSubmitted = true;
  }

}
