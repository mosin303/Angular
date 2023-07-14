import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChagsOnly]'
})
export class ChagsOnlyDirective {

  constructor( private elementRef:ElementRef) { }

@HostListener('input', ['$event'])

inputChange(){
  console.log('directive calling...');
  let inputBoxValua = this.elementRef.nativeElement.value;
  console.log(inputBoxValua);
  this.elementRef.nativeElement.value = inputBoxValua.replace(/[^a-zA-Z ]*/g,'')
  
  
}


}
