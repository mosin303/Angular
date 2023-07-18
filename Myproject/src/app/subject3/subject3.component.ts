import { Component } from '@angular/core';
import { StoringService } from '../storing.service';

@Component({
  selector: 'app-subject3',
  templateUrl: './subject3.component.html',
  styleUrls: ['./subject3.component.css']
})
export class Subject3Component {
  dataFromSub1!:string;
  constructor(private storingService:StoringService){}

  ngOnInit(){
    console.log('init s3');
    this.storingService.name.subscribe(data=>{
      this.dataFromSub1 =data;
    })
    
  }
}
