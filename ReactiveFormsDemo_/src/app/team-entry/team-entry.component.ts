import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormArray } from '@angular/forms';
import { Employee } from './employee.model';
import { Team } from './team.model';
@Component({
  selector: 'app-team-entry',
  templateUrl: './team-entry.component.html',
  styleUrls: ['./team-entry.component.css']
})
export class TeamEntryComponent implements OnInit {

  teamEntryForm : FormGroup;  
  team: Team = new Team();
  isSubmitted : boolean  = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.createTeamForm();
    this.addNewEmployee();
  }

  createTeamForm(){
    this.teamEntryForm = this.formBuilder.group({
      teamName : ['Crazy',Validators.required],
      teamManager: ['',Validators.required],
      employees: this.formBuilder.array(
        []
      )      
    });
  }

  get employeeArray():FormArray{
    return this.teamEntryForm.get('employees') as FormArray;    
  }

  addNewEmployee(){
	  let fg = this.formBuilder.group(new Employee());
    this.employeeArray.push(fg);	  
    (<FormArray>this.teamEntryForm.get('employees')).push(fg);
  }
  
  save(){
    this.isSubmitted = true;
    console.log(this.teamEntryForm.value);
    this.team = this.teamEntryForm.value;
  }
}
