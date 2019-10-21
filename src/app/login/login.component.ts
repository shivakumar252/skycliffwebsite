import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from './userdata.service';
import Stepper from 'bs-stepper';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 todaydate=new Date();
  login: FormGroup;
  name = 'Angular';
  constructor(
    private fb: FormBuilder,
    private _userdata: UserdataService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.login = this.fb.group({
      user_email: new FormControl(),
      user_password: new FormControl()
    });
  }
  onLoginSubmit() {
    alert(this.login.value.user_email);
    this._userdata.login(
      this.login.value.user_email,
      this.login.value.user_password
    );
    // if (this._userdata.redirectURL) {
    //   this._router.navigateByUrl(this._userdata.redirectURL);
    // } else {
    //   this._router.navigate(["/employeedetails"]);
    // }
  }
}
