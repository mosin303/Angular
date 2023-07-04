import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApidataService } from '../apidata.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-activity',
  templateUrl: './student-activity.component.html',
  styleUrls: ['./student-activity.component.css']
})
export class StudentActivityComponent {

  formData:any;
  tableHeading : any[]= ["id",' fullName ', "mobNo",  "email", "city","address","gender"];
  constructor( private fb:FormBuilder,
    private apidata:ApidataService,
    private httpClient :HttpClient){}

    ngOnInit(){
      console.log('....')
       this.getdata();

}

getdata(){
  let urlEndPointToGetData = 'posts';
  this.apidata.getApiCall(urlEndPointToGetData).subscribe(data =>{
    console.log('get data',data);
    this.formData = data
  });
}
}
