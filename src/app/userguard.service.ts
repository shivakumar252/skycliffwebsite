import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Route, CanActivate, CanLoad } from '@angular/router';
import { UserdataService } from './login/userdata.service';
@Injectable({
  providedIn: 'root'
})
export class UserguardService implements CanActivate,CanLoad {

  constructor(private _data:UserdataService,private _router:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){

    return this.isUserLoggedIn(state.url);
}
canLoad(_route:Route){
  return this.isUserLoggedIn(_route.path);
}
isUserLoggedIn(url:string):boolean{

  if(this._data.isLoggedIn){
    return true;

  }
  this._data.redirectURL=url;
  this._router.navigate(['/login']);
  return false;
}
}
