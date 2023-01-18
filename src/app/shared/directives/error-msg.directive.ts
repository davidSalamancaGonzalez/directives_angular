import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit{

  private _color : string = "red"
  private _msg  : string = "Required field"

  htmlElement : ElementRef<HTMLElement>;

  @Input() set color( value : string){
    this._color = value;
    this.setColor()
  }

  @Input() set msg( value : string){
    this._msg = value;
    this.setMsg()
  }

  @Input() set valid( value : boolean){
    value ? this.htmlElement.nativeElement.classList.remove('hidden') : this.htmlElement.nativeElement.classList.add('hidden')

  }



  constructor( private el : ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor()
    this.setMsg()
    this.setClass()
  }

  setClass(){
    this.htmlElement.nativeElement.classList.add('form-text')
  }

  setColor(){
    this.htmlElement.nativeElement.style.color = this._color
  }

  setMsg(){
    this.htmlElement.nativeElement.innerHTML = this._msg
  }


}
