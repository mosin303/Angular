import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApidataService } from '../student/apidata.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  test : any ;  //property section
  userName!:string;
  list:any;
  studentsData:any;
  data: any;



  constructor(private router : Router,
    private ApidataSevice:ApidataService){

  }
  login(){
    this.router.navigateByUrl('/login');
  }
  studentActivity(){
    this.router.navigateByUrl('student/studentActivity');
  }
  directives(){
    this.router.navigateByUrl('directives');
  }

  signup(){
    this.router.navigateByUrl('/signup');
  }

  parent(){
    this.router.navigateByUrl('/parent'); 
  }

  lifecyclehooks(){
    this.router.navigateByUrl('/lifecyclehooks()')
  }

  apicall(){
    this.router.navigateByUrl('student/apicall')
  }
  form(){
    this.router.navigateByUrl('form')
  }

  getById(){
    this.router.navigateByUrl('getid')


}
fdata(){
  this.router.navigateByUrl('fdata')

}
subject(){
  this.router.navigateByUrl('subject')
}

updateDetails(){this.ApidataSevice.journey = "update"
this.ApidataSevice.getApiCall('posts','1').subscribe(response=>{
  this.data= response;
});

if(this.data){
  this.ApidataSevice.getDataById = this.data;
  this.router.navigateByUrl('student/apicall')
}

}
}
