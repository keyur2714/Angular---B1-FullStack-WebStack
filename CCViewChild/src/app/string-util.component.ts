import { Component } from '@angular/core';
@Component({
    selector : 'app-string-util',
    template : `Result is : <ng-content></ng-content>`,
    styles : []
})
export class StringUtil{

    constructor(){
        console.log("String Util Object Created :: ");
    }

    convertUpperCase(str:string):string{
        return str.toUpperCase();
    }

    convertLowerCase(str:string):string{
        return str.toLowerCase();
    }

    getReverseString(str:string):string{
        return str.split("").reverse().join('');
    }

}