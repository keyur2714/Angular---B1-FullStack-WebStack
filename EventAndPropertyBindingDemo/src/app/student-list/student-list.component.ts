import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  selectedStudent : Student = new Student();  

  studentList : Student[] = [
    {
      "rollNo":32,
      "name":"keyur"
    },
    {
      "rollNo":26,
      "name":"denish"
    },
    {
      "rollNo":44,
      "name":"vinit"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  setSelectedStudent(student:Student):void{
    console.log(student);
    this.selectedStudent = student;

  }

}
