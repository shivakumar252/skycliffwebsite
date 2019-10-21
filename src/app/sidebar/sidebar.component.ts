import { Component, OnInit } from "@angular/core";
import { UserdataService } from "../login/userdata.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  todaydate = new Date();

  image: boolean = true;
  visibleSidebar1;

  constructor(private _userdata: UserdataService) {
    // setInterval(() => {
    //   this.todaydate = new Date();
    // },3000);
  // setTimeout(() =>{
  //   this.todaydate =new Date();
  //  },3600);
  }

  ngOnInit() {}
  onLogOut() {
    this._userdata.logout();
  }
  isLoggedIn() {
    return this._userdata.isLoggedIn;
  }
}
