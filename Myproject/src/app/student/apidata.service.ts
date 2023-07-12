
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  url = " http://localhost:3000/";
  getDataById: any;
  journey!: string;
  constructor(public httpClient : HttpClient) { }

  postApiCall(endpoint:string, data:any){
    //post method: 2 para: form url and form Data
    let Url = this.url + endpoint;
    return  this.httpClient.post(Url,data)
  }

  getApiCall(endpoint:any , id? : any){
    let url = id ? this.url + endpoint + '/' + id : this.url + endpoint ;
    return this.httpClient.get(url);
  }

  deletApicall(endPoint:string, id :any){
    let url = this.url + endPoint + '/' + id;
    return this.httpClient.delete(url)
  }
  putApiCall(endPoint:string, formData:any, id:any){
    let url = this.url + endPoint +'/' + id;
    return this.httpClient.put(url, formData)
  }


}
