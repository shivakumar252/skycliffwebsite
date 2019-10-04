import { Routes,RouterModule } from "@angular/router";
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
const arr : Routes=[
  {path:'',component:SidebarComponent},
{path:'employeedetails',component:EmployeedetailsComponent},
{path:'aboutus',component:AboutusComponent},
{path:'contactus',component:ContactusComponent}
];
export const routing=RouterModule.forRoot(arr);
