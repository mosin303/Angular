import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StoringService } from '../storing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  data!: string;
  @Input() dataFromParent:any;
  @Input() parentsDataName :any;
  @Output() dataFromChild = new EventEmitter <any>;
  @Output() surName = new EventEmitter <any>;

  constructor(public storingdataService:StoringService, private router:Router){

  }



  get(){
    this.data = this.storingdataService.setData;

    console.log('data',this.data);
    
  }

  sendData(data? : any){
    let sName ='mosin';
    this.surName.emit(sName);

    if(data){
      console.log(data.target.value);
      let value = data.target.value;
      this.dataFromChild.emit(value);
    }
  }
  
  

  

}
