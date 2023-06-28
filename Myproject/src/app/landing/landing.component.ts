import { Component } from '@angular/core';
import { Router } from '@angular/router';

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



  constructor(private router : Router){

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

}
