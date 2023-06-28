import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent {
  @Input() test :any
  //constructor:1. It is not a lifecycle hook.
              //2. constructor will trigger first when componenSt gets initialised
              //3. will use constructor to inject dependancies
  constructor(){
    console.log('constructor....');
  }
//ngOnChange : When the value of a data bound property changes, then this method is called.
  ngOnChange(){
    console.log('ngOnChange...');
  }
 // ngOnInit − This is called whenever the initialization of the
  // directive/component after Angular first displays the data-bound properties happens.
  ngOnInit(){
     console.log('ngInit....');
     
  }
  ngDoCheck(){
    console.log('ngDoCheck');
    
  }
}

