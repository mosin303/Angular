import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumber]'
})
export class NumberDirective {

  constructor(private eRef : ElementRef ) { }
 
  @HostListener('input',['$event'])
  mobNumValidation(){
  console.log('numbers only directive...');
   let mobNumInpBoxValue = this.eRef.nativeElement.value;
   console.log('mobNumInpBoxValue',mobNumInpBoxValue);
    this.eRef.nativeElement.value = mobNumInpBoxValue.replace(  /[^0-9]*/g, "");
  }

}
