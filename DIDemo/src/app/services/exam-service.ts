import { Injectable } from '@angular/core';
import { IQuestion } from './iquestion';
import { LoggingService } from './logging-service';
@Injectable()
export class ExamService {
 
    constructor(private iQuestion: IQuestion,private loggingService: LoggingService){
    }

    startExam(){
        this.loggingService.logInfo(this.iQuestion.askQuestion());
    }
}