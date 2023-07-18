import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import { DirectivesInAngularComponent } from './directives-in-angular/directives-in-angular.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
 
import { FormComponent } from './form/form.component';
import { FdataComponent } from './student/fdata/fdata.component';
import { GetidComponent } from './getid/getid.component';
import { Subject1Component } from './subject1/subject1.component';

const routes: Routes = [
{ path : '', component :LandingComponent},
{ path : 'landing', component :LandingComponent},
{ path : 'login', component : LoginComponent},
{path : 'signup', component : SignupComponent },
{ path : 'directives', component: DirectivesInAngularComponent},
{path : 'parent',component : ParentComponent},
{ path : 'child',component: ChildComponent},
{ path : 'lifecyclehooks', component :LifecyclehooksComponent},
 {path : 'form',component: FormComponent},
 { path : 'fdata', component:FdataComponent},
 { path : 'getid', component:GetidComponent},
 { path : 'subject', component:Subject1Component},
{ path : 'student', loadChildren:()=>import ('./student/student.module').then(mod=>mod.StudentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
