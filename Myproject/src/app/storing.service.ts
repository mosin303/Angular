import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoringService {

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
