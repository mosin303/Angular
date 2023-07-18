import { Component } from '@angular/core';
import { ApidataService } from '../student/apidata.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
  
 @Component({
  selector: 'app-getid',
  templateUrl: './getid.component.html',
  styleUrls: ['./getid.component.css']
})
export class GetidComponent {
  matForm : FormGroup = new FormGroup({});
   
   showPassword : boolean = false;
   showConfirmPassword: boolean = false;
    
    
    
  
  
  constructor(private fb:FormBuilder,
    private ApidataSevice:ApidataService, 
  ){}

ngOnInit(){
  console.log('...');
  this.matFormDetails();
   
  
}

matFormDetails(){
  this.matForm = this.fb.group({
    firstName :['',[Validators.required,Validators.pattern('[a-zA-Z]*$'),Validators.minLength(2)]],
    lastName :['',[Validators.required,Validators.pattern('[a-zA-Z]*$'),Validators.minLength(2)]],
    password :['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*$'),Validators.minLength(6),Validators.maxLength(16)]],
    confirmPassword:['',[Validators.required,]]
  },{

    Validator:this.Mustmatch('password','confirmPassword')

  
  })
}

get f() {
  return this.matForm.controls;
}

Mustmatch(password: any, confirmPassword: any) {

  return (formGroup: FormGroup) => {
    const passwordcontrol = formGroup.controls[password];
    const confirmPasswordcontrol = formGroup.controls[confirmPassword];

    if (confirmPasswordcontrol.errors && !confirmPasswordcontrol.errors['Mustmatch']) {
      return;
    }
    if (passwordcontrol.value !== confirmPasswordcontrol.value) {
      confirmPasswordcontrol.setErrors({ Mustmatch: true });
    }
    else {
      confirmPasswordcontrol.setErrors(null);
    }

  }

}




// get ()
// {
//   return this.matForm.controls;
// }




 visibilePassword(){
  this.showPassword =  !this.showPassword;
  }
visibileConfirmPassword(){
  //this.confirmPasswordField = this.matForm.value.confirmPassword;
  this.showConfirmPassword = !this.showConfirmPassword;
 // this.passwordField == this.confirmPasswordField ? this.ConfirmPasswordMatch=true : this.ConfirmPasswordMatch = false;
}
// passwordMismatch(){
//   // console.log(this.matForm.value.password);
//   this.passwordField = this.matForm.value.password;
//   this.confirmPasswordField = this.matForm.value.confirmPassword;
//   if(this.passwordField == this.confirmPasswordField){
//     this.passwordMatch = false
//   }
//   else{
//     this.passwordMatch = true;
//   }
//   if(this.passwordField == this.confirmPasswordField){
//         this.ConfirmPasswordMatch = false
//       }
//       else{
//         this.ConfirmPasswordMatch = true;
// }
// }
}

 

   

