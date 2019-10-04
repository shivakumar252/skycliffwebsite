import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { promise } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string="https://f0d80717.ngrok.io/api/Settings/GetDesignations"
deleteurl:string="https://f0d80717.ngrok.io/api/Settings/DeleteDesignation?DesignationId="
editurl:string="https://f0d80717.ngrok.io/api/Settings/InsUpdateDesignation"
  constructor(private _http:HttpClient) { }

  getAllemployeedetails(){
  return this._http.get(this.url);
}
deleteemployee(id){
  let head = new HttpHeaders().set("Content-Type", "application/json");
  return this._http.post(this.deleteurl + id ,{ headers: head });
}
editemployee(item){
  let head = new HttpHeaders().set("Content-Type", "application/json");
  let body = JSON.stringify(item);
  return this._http.post(this.editurl , body,{headers: head});
}
addemployee(item){
  let head = new HttpHeaders().set("Content-Type", "application/json");
  let body = JSON.stringify(item);
  return this._http.post(this.editurl , body,{headers: head});
}
}
