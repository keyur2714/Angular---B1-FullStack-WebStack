import { IQuestion } from './iquestion';
export class AngularQuestion extends IQuestion{
    askQuestion():string{
        return "What is Angular?";
    }
}