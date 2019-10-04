import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
   styleUrls: ['./sidebar.component.css'],

})
export class SidebarComponent {
  image:boolean=true;
  visibleSidebar1;

  constructor() { }

  ngOnInit() {
  }

}
