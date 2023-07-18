import { Component } from '@angular/core';
import { StoringService } from '../storing.service';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.css']
})
export class Subject2Component {

  nameComingFromSub1!:string;
  constructor(private storingService:StoringService){ }

  ngOnInit(){
    console.log('init s2');
    this.storingService.name.subscribe(data=>{
      this.nameComingFromSub1= data;
    })
    
  }
}
