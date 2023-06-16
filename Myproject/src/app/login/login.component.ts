import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  
  constructor(private router : Router){
    
  }
  selectedGender: { [key: string]: string } = {}; 

   
     
  

  back(){
     this.router.navigateByUrl('landing')
  }

  submit(formData:any){
    console.log(formData);
  }
}
