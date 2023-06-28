import { Component } from '@angular/core';
import { StoringService } from '../storing.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {


   parentData:any;

   constructor(public storingDataSevis: StoringService){

   }

   set(){
    this.storingDataSevis.setData ="mosin"
   }
}
