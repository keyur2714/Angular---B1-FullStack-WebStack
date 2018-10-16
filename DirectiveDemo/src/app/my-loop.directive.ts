import { Directive,Input,ViewContainerRef,TemplateRef } from '@angular/core';

@Directive({
  selector: '[appMyLoop]'
})
export class MyLoopDirective {

  @Input()
  extra: string = 'Hi...';

  constructor(private viewContainerRef:ViewContainerRef,private templateRef: TemplateRef<any>) { }

  @Input("appMyLoop") set myLoop(num : number){
    console.log(this.extra);
    for(let i=1;i<=num;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
