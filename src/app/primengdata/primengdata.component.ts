import { Component, OnInit } from '@angular/core';
import { DataService } from '../employeedetails/data.service';
import { Employee } from '../employeedetails/employee';
import { MenuItem, MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-primengdata',
  templateUrl: './primengdata.component.html',
  styleUrls: ['./primengdata.component.css']
})
export class PrimengdataComponent implements OnInit {
arr: Employee[];
cols: any[];
selectedEmployee: Employee;
selectEmployees: Employee[];
items: MenuItem[];
id:number;
name:string;
description:string;
item:any;

  constructor(private _data:DataService,private messageService: MessageService,private confirmationService:ConfirmationService) { }

  ngOnInit() {
      this._data.getAllemployeedetails().subscribe(
        (data:Employee[])=>{
          this.arr=data;
        }
      );


      this.cols = [
          { field: 'id', header: 'id' },
          { field: 'name', header: 'name' },
          { field: 'description', header: 'description' }

      ];

      this.items = [
          { label: 'View', icon: 'pi pi-search', command: (event) => this.viewCar(this.selectedEmployee) },
          { label: 'Delete', icon: 'pi pi-times', command: (event) => this.onUserDelete(this.selectedEmployee.id)},
          {label:'Edit',icon:'pi pi-edit',command: (event) => this.editemployeeget(this.selectedEmployee)}
      ];
  }

  viewCar(arr: Employee) {
      this.messageService.add({ severity: 'info', summary: 'Car Selected', detail: arr.id + ' - ' + arr.name });
  }


      onUserDelete(id:number){
        console.log(id);
        this._data.deleteemployee(id).subscribe(
          (data:any)=>{
            this.ngOnInit();
          }
          );
          }
          confirmDelete(id: number) {
            console.log(id);
            this.confirmationService.confirm({
                message: 'Are you sure that you want to delete?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.onUserDelete(id);
                    // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
                },
                reject: () => {
                    // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
                }
            });
          }
    //   deleteEmployee(arr: Employee) {
    //     let index = -1;
    //     for (let i = 0; i < this.arr.length; i++) {
    //         if (this.arr[i].id == arr.id) {
    //             index = i;
    //             break;
    //         }
    //     }
    //     this.arr.splice(index, 1);

    //     this.messageService.add({ severity: 'info', summary: 'Employee Deleted', detail: arr.id + ' - ' + arr.name });
    // }
    editemployeeget(arr:Employee) {
      this.id = arr.id;
      this.name= arr.name;
      this.description = arr.description;
      console.log(arr);
    }
    UpdateEmployee(f1) {
      var req = {
        id: f1.value.id,
        name: f1.value.name,
        description: f1.value.description
      };
      this._data.editemployee(req).subscribe((data: any) => {
        this._data.getAllemployeedetails().subscribe((data: Employee[]) => {
          this.arr = data;
        });
        alert("Record Edited.");
      });
    }
          }






