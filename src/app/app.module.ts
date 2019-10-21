import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SidebarModule} from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';

import { routing } from "./app.routing";

import { HttpClientModule  } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';

import { FormsModule } from "@angular/forms";
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ReversestringPipe } from './reversestring.pipe';
import { DataTableModule } from 'ng-angular8-datatable';
import { PrimengdataComponent } from './primengdata/primengdata.component';
import {TableModule} from 'primeng/table';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {ContextMenuModule} from 'primeng/primeng';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ContextmenuComponent } from './contextmenu/contextmenu.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatTableModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MaterialtableComponent } from './materialtable/materialtable.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmationmsgComponent } from './materialtable/confirmationmsg/confirmationmsg.component';
// import { ConfirmationDialogService } from './materialtable/confirmationdialog.service';
import { SyncsidebarComponent } from './syncsidebar/syncsidebar.component';
// import { SidebarModule,MenuAllModule, TreeViewAllModule} from '@syncfusion/ej2-angular-navigations';
// import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BootstrapModalModule } from 'ngx-bootstrap-modal';
import { TourismdetailsComponent } from './tourismdetails/tourismdetails.component';
// import { DialogService } from "ngx-bootstrap-modal";
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EmployeedetailsComponent,
    AboutusComponent,
    ContactusComponent,
    ReversestringPipe,
    PrimengdataComponent,
    LoginComponent,
    ContextmenuComponent,
    MaterialtableComponent,
    ConfirmationmsgComponent,
    SyncsidebarComponent,
    TourismdetailsComponent
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
    FormsModule,
    DataTableModule,
    TableModule,
    ToastModule,
    ContextMenuModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatDialogModule,
    NgbModule,
    TooltipModule,
    BootstrapModalModule,
    MatExpansionModule,
    ToastrModule.forRoot()


  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmationmsgComponent ],
})
export class AppModule { }
