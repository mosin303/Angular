import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApidataService } from '../student/apidata.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form!:FormGroup
  formData:any;
  tableHeading : any[]= ['Name', "MobileNumber","id"  ];
  myName: any;
  constructor( private fb:FormBuilder,
    private apidata:ApidataService,
    private httpClient :HttpClient){}
    todayDate = new Date();
    searchBoxVal:any;

    ngOnInit(){
      console.log('....');
      this.myForm();
      this.getdata();

    }

    myForm(){
      this.form = this.fb.group({
         name : ['',[Validators.required]],
         mobileNo : ['',[Validators.required]]
      

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

    getdata(){
      let urlEndPointToGetData = 'form';
      this.apidata.getApiCall(urlEndPointToGetData).subscribe(data =>{
        console.log('get data',data);
        this.formData = data
        
      });
    }
  }

