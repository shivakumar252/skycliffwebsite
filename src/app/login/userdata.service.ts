import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
urluser:string="https://nodejsapidemo.herokuapp.com/users"
  constructor(private _http: HttpClient ,private _router: Router) { }
  getAllUsers() {
    return this._http.get(this.urluser);
  }
  currentUser;
  redirectURL: string;
  login(user_email: string, user_password: string) {
    debugger;
    if (user_email =='admin' && user_password == '1234') {

  this._router.navigate(['/sidebar']);
}
else{
  this._router.navigate(['']);

  }
}
  logout() {
    this.currentUser = null;
    this.redirectURL = "";
    this._router.navigate([""]);
  }
  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }
}
