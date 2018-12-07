import { IQuestion } from './iquestion';
export class SpringQuestion extends IQuestion{
    askQuestion():string{
        return "What is Spring?";
    }
}