import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApidataService } from '../student/apidata.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form!:FormGroup

  constructor( private fb:FormBuilder,
    private apidata:ApidataService ){}

    ngOnInit(){
      console.log('....')
      this.myForm();

    }

    myForm(){
      this.form = this.fb.group({
         name : ['',[]],
         mobileNo : ['']
      

      })
    }

       save(){
        console.log(this.form.value);
        let urlEndPoint ='form';
        let formData = {
        Name : this.form.value.name,
        MobileNumber : this.form.value.mobileNo
      }
      this.apidata.postApiCall(urlEndPoint,formData).subscribe(resp=>{
        console.log(resp);
        
      })

    }
}
