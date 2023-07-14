import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoringService } from '../storing.service';
import { StudentDataService } from '../student/student-data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm! :FormGroup
  //name:string = 'mosin';
  //name!:string;
  student = {
   name: 'mosin',
   age:23,
   mob:6464646464,
   city:'mumbai'
  }
  data:any;
  constructor(private fb: FormBuilder, 
           private storingService : StoringService,
            private router: Router,
            private studentDataService :StudentDataService
            ){}
   ngOnInit(){
      this.formDef();
      this.storingService.studentData =  this.student; //set student obj to service property studentData
       this.data  = this.studentDataService.data;
       console.log(" this.data  >>", this.data  );
       
     }

    formDef(){
       this.signUpForm = this.fb.group({
         fullName : ['',[Validators.required, Validators.pattern("[a-zA-Z ]*$"),
                    Validators.minLength(10), ]],
         mobNo:['',[Validators.pattern("[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
         email:[],
         userName:[],
         city:[],
         address:[],
         password:[],
         confirmPassword:[],
         gender:['Male']
       })

     }

     submit(){
      console.log(this.signUpForm.value);
      this.storingService.userFullName = this.signUpForm.value.fullName;
      console.log(' this.storingService.userFullName>>', this.storingService.userFullName);
      this.storingService.listOfUsers = ['mosin','salman','nitin','shri'];
      this.router.navigateByUrl('landing');
     }







}
