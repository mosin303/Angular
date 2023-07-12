import { Component } from '@angular/core';
import { ApidataService } from '../apidata.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-fdata',
  templateUrl: './fdata.component.html',
  styleUrls: ['./fdata.component.css']
})
export class FdataComponent {
  tableData: any;
 fData:any;
  
 tableHeading : any[]= ["id",' fullName ', "mobNo",  "email", "city","address","gender"];


constructor(private bf:FormBuilder,
  private apidata:ApidataService,
  private router:Router){}

  ngOnInit(){
    console.log('....')
    //  this.getById();
  }
  // getById(){
  //  this.router.navigateByUrl('student/fdata')
  // }

  getById(){
    let urlEndPointToGetById =  'posts' ;
    this.apidata.getApiCall(urlEndPointToGetById).subscribe(resp =>{
      console.log('get By Id',resp);
      this.fData = resp
      
    });
   }
   delete(){
    this.apidata.deletApicall('posts','6').subscribe(resp=>{
      console.log('delet respo',resp);
      
    })
   }
}
