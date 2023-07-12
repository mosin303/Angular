import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApidataService } from '../student/apidata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  
  constructor(private router : Router,
    private apiData : ApidataService){
    
  }
   

   
     
  

  back(){
     this.router.navigateByUrl('landing')
  }

  submit(formData:any){
    console.log(formData);

    let requestData = {
      fullName :formData.fullName,
      password : formData.pass,
      confirmPassword : formData.confirmPassword,
      gender : formData.gender
    }
    let endpoint = "comments";
    this.apiData.postApiCall(endpoint,requestData).subscribe(res=>{
    console.log(res);
    })
  }
}
