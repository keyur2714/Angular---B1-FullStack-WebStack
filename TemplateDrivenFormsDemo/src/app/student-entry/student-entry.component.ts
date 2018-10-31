import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { Course } from './course.model';
@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {

  student : Student = new Student();
  isSubmitted :boolean = false;  

  courseList : Course[] = [];

  constructor() { }

  ngOnInit() {
    this.student.rollNo = 1;
    this.student.gender = 'M';

    let course1 = new Course();
    course1.id = 10;
    course1.name = "Angular";
    course1.fees =12000;
    course1.trainerName = "Keyur";

    let course2 = new Course();
    course2.id = 20;
    course2.name = "BigData";
    course2.fees =15000;
    course2.trainerName = "Vaibhav";

    let course3 = new Course();
    course3.id = 30;
    course3.name = "Java";
    course3.fees =10000;
    course3.trainerName = "Keyur";

    this.courseList.push(course1);
    this.courseList.push(course2);
    this.courseList.push(course3);

    this.student.course = this.courseList[1];
    
  }

  save(){
    console.log(this.student.rollNo);
    console.log(this.student.refferedBy);
    this.isSubmitted = true;    
  }

}
