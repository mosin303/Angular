import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { DirectivesInAngularComponent } from './directives-in-angular/directives-in-angular.component';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { SharedModule } from './shared/shared.module';
import { FormComponent } from './form/form.component';
import { GetidComponent } from './getid/getid.component';
import { ChagsOnlyDirective } from './chags-only.directive';
import { FilterPipe } from './filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Subject1Component } from './subject1/subject1.component';
import { Subject2Component } from './subject2/subject2.component';
import { Subject3Component } from './subject3/subject3.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    
    DirectivesInAngularComponent,
         SignupComponent,
         ParentComponent,
         ChildComponent,
         LifecyclehooksComponent,
         FormComponent,
         GetidComponent,
         ChagsOnlyDirective,
         FilterPipe,
         Subject1Component,
         Subject2Component,
         Subject3Component,
         

     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
