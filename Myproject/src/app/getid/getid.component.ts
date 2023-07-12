import { Component } from '@angular/core';
import { ApidataService } from '../student/apidata.service';

@Component({
  selector: 'app-getid',
  templateUrl: './getid.component.html',
  styleUrls: ['./getid.component.css']
})
export class GetidComponent {
  studentName:any;
  constructor(
    private ApidataSevice:ApidataService
  ){}



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
