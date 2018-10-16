import { Directive,ElementRef,AfterViewInit,Input } from '@angular/core';

@Directive({
  selector: '[appCustomeStyle]'
})
export class CustomeStyleDirective implements AfterViewInit{

  @Input()
  color: string = 'Red';

  @Input()
  bgColor: string = 'Black';

  @Input()
  fontSize: string = '20px';

  constructor(private elementRef : ElementRef) { }

  ngAfterViewInit(){
    console.log("Hello..!");
    console.log(this.elementRef);
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.background = this.bgColor;
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
  }

  changeColor(color:string,ele: ElementRef){
    ele.nativeElement.style.color = color;
  }
}
