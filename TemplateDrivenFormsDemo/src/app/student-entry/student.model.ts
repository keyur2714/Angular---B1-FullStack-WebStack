import { Course } from './course.model';
export class Student{
    constructor(public rollNo?:number,public name?:string,public mobileNo?:string,public email?:string,public gender?:string,public course?:Course,public refferedBy?:string){}
}