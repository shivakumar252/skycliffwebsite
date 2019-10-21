import { Routes,RouterModule } from "@angular/router";
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PrimengdataComponent } from './primengdata/primengdata.component';
import { LoginComponent } from './login/login.component';
import { UserguardService } from './userguard.service';
import { ContextmenuComponent } from './contextmenu/contextmenu.component';
import { MaterialtableComponent } from './materialtable/materialtable.component';
import { SyncsidebarComponent } from './syncsidebar/syncsidebar.component';
import { TourismdetailsComponent } from './tourismdetails/tourismdetails.component';

const arr : Routes=[
{path:'',component:LoginComponent},
{path:'sidebar',component:SidebarComponent},
{path:'employeedetails',canLoad:[UserguardService],component:EmployeedetailsComponent},
{path:'aboutus',canLoad:[UserguardService],component:AboutusComponent},
{path:'contactus',component:ContactusComponent},
{path:'primengdata',component:PrimengdataComponent},
{path:'contextmenu',component:ContextmenuComponent},
{path:'materialtable',component:MaterialtableComponent},
{path:'syncsidebar',component:SyncsidebarComponent},
{path:'tourismdetails',component:TourismdetailsComponent}

];
export const routing=RouterModule.forRoot(arr);
