import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentActivityComponent } from './student-activity/student-activity.component';
// import { StudentDemoComponent } from './student-demo/student-demo.component';
// import { FormsModule } from '@angular/forms';
import { ApicallComponent } from './apicall/apicall.component';
import { SharedModule } from '../shared/shared.module';
import { FdataComponent } from './fdata/fdata.component';
 
 

@NgModule({
  declarations: [
    StudentActivityComponent,
    ApicallComponent,
    FdataComponent,
    // StudentDemoComponent,
   
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    // FormsModule,
    SharedModule
  ]
})
export class StudentModule { }
