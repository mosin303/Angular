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


  constructor(private fb: FormBuilder, private sDataSeravice :StoringService,
    private ApidataSevice:ApidataService,
    private router:Router ){}

 ngOnInit(){
    this.formDef();
    
  }
  
  formDef(){
    this.signUpForm = this.fb.group({
      fullName : ['',[Validators.required, Validators.pattern("[a-zA-Z ]*$"),
                 Validators.minLength(10),this.sDataSeravice.whiteSpaceValidator]],
      mobNo:['',[Validators.pattern("[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
      email:[],
      userName:[],
      city:[],
      address:[],
      gender:['Male']
    })
  }
  submit(){
    console.log(this.signUpForm.value);
    let endpoint = 'posts';
    this.ApidataSevice.postApiCall(endpoint,this.signUpForm.value).subscribe(response =>{
    this.postApiResponse = response;
    })
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
