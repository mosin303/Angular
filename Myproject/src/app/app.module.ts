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

     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
