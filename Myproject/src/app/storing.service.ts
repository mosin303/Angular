import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoringService {
  data: any;
  name = new Subject<string>();

  constructor() { }
  userFullName : any;
  listOfUsers:any
  studentData: any;
  setData!: string;
   
  
  whiteSpaceValidator(name:any){
    let data = name.value;
    let newdata = data?.trim();
    let isValid = data.length != newdata.length ;
    return isValid ? {whiteSpace:true} : null
  }



}
