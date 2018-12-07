import { Component, OnInit } from '@angular/core';
import { ExamService } from '../services/exam-service';
import { LoggingService } from '../services/logging-service';
import { IQuestion } from '../services/iquestion';
import { SpringQuestion } from '../services/spring-question';
import { AngularQuestion } from '../services/angular-question';
import { BigDataQuestion } from '../services/bigdata-question';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers: [ 
    {provide: IQuestion , useClass : AngularQuestion}
  ]  
})
export class ExamComponent implements OnInit {

  question : string = '';

  constructor(private iquestion:IQuestion,private loggingService: LoggingService) { }

  ngOnInit( ) {
    this.loggingService.logInfo("Exam Component Loaded.");
    this.question = this.iquestion.askQuestion();
    this.loggingService.logDebug(this.iquestion.askQuestion());
  }

}
