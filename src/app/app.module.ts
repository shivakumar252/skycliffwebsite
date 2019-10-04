import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SidebarModule} from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
// import {MatIconModule} from '@angular/material/icon';
import { routing } from "./app.routing";

import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

import { FormsModule } from "@angular/forms";
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EmployeedetailsComponent,
    AboutusComponent,
    ContactusComponent,


  ],
  imports: [
    BrowserModule,
    SidebarModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    routing,
    HttpClientModule,
    NgxPaginationModule,
    ConfirmDialogModule,
    FormsModule









  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
