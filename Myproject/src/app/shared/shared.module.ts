import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDemoComponent } from '../student/student-demo/student-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NumberDirective } from '../student/number.directive';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
  
 


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
    MatInputModule,
   MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    
     
  ],
  exports:[
    StudentDemoComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NumberDirective,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    
    
   
  ]
})
export class SharedModule { }
