
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  url = " http://localhost:3000/";
  constructor(public httpClient : HttpClient) { }

  postApiCall(endpoint:string, data:any){
    //post method: 2 para: form url and form Data
    let apiUrl = this.url + endpoint;
    return  this.httpClient.post(apiUrl,data)
  }

  getApiCall(endpoint:any){
    let url = this.url + endpoint;
    return this.httpClient.get(url);
  }
}
