import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoringService } from 'src/app/storing.service';
import { ApidataService } from '../apidata.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-apicall',
  templateUrl: './apicall.component.html',
  styleUrls: ['./apicall.component.css']
})
export class ApicallComponent {
  signUpForm! :FormGroup;
  formData:any;
  postApiResponse: any;
  studentName:any;
  getDataById: any;
  journey: any;


  constructor(private fb: FormBuilder, private sDataSeravice :StoringService,
    private ApidataSevice:ApidataService,
    private router:Router ){}

 ngOnInit(){
  this.getDataById = this.ApidataSevice.getDataById;
      this.journey = this.ApidataSevice.journey;
      console.log( this.getDataById );


    this.formDef();
    
  }
  
  formDef(){
    this.signUpForm = this.fb.group({
      fullName : [this.getDataById.fullName ? this.getDataById.fullName : '',[Validators.required, Validators.pattern("[a-zA-Z ]*$"),
                 Validators.minLength(10),this.sDataSeravice.whiteSpaceValidator]],
      mobNo:[this.getDataById.mobNo ? this.getDataById.mobNo : '',[Validators.pattern("[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
      password:[this.getDataById. password ? this.getDataById. password : ''],
      confirmPassword:[this.getDataById.confirmPassword ? this.getDataById.confirmPassword : ''],
      email:[this.getDataById.email ? this.getDataById.email : ''],
      userName:[this.getDataById.userName ? this.getDataById.userName : ''],
      city:[this.getDataById.city ? this.getDataById.city : ''],
      address:[this.getDataById.address ? this.getDataById.address : ''],
      gender:[this.getDataById.gender ? this.getDataById.gender : 'Male']
    })
  }
  submit(){
    console.log(this.signUpForm.value);
    let endPoint = 'posts';
    if(this.journey != 'update'){
    this.ApidataSevice.postApiCall(endPoint,this.signUpForm.value).subscribe(response =>{
    this.postApiResponse = response;
    })
  }
  else{
    this.ApidataSevice.putApiCall(endPoint,this.signUpForm.value,'1').subscribe(res=>{
      console.log(res);
      
    })
   }
}
studentActivity(){
  this.router.navigateByUrl('student/studentActivity');
}

inputBox(){
  console.log(this.studentName);
  let reqData = {
    "studentName" : this.studentName
   }
   let urlEndPoint = "studentname";
   if(this.studentName.length > 2){
    this.ApidataSevice.postApiCall(urlEndPoint,reqData).subscribe(resp => {
      console.log(resp);  
     })
    }
}
 
}
