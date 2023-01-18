import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {


  @Input() set customIf( cond : boolean){
    if ( cond ) {
      this.viewContainer.createEmbeddedView( this.templateRef )
    } else {
      this.viewContainer.clear()
    }
  }

  constructor( private templateRef : TemplateRef<HTMLElement>,
               private viewContainer : ViewContainerRef ) {}



}
