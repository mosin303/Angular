import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDemoComponent } from '../student/student-demo/student-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NumberDirective } from '../student/number.directive';
 
 


@NgModule({
  declarations: [
    StudentDemoComponent,
    NumberDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  exports:[
    StudentDemoComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NumberDirective,
    
    
  ]
})
export class SharedModule { }
