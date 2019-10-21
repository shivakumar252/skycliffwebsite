import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  AfterViewChecked
} from "@angular/core";
import { DataService } from "./data.service";
import { Employee } from "./employee";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs/operators";
import { ConfirmationService } from "primeng/api";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-employeedetails",
  templateUrl: "./employeedetails.component.html",
  styleUrls: ["./employeedetails.component.css"]
})
export class EmployeedetailsComponent
  implements OnInit, OnDestroy {
  todaydate = new Date();
  arr: Employee[] = [];
  config: any;
  collection = [];
  id: string;
  name: string;
  test: any;
  description: string;
  i:number=0;
  constructor(
    private _data: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private confirmationService: ConfirmationService,
    private _act: ActivatedRoute
  ) {
    this.test = setInterval(() => {
      this.todaydate = new Date();
      console.log("test");
    }, 3000);
    this.config = {
      currentPage: 1,
      itemsPerPage: 8
    };

    this.route.queryParamMap
      .pipe(map(params => params.get("page")))
      .subscribe(page => (this.config.currentPage = page));

    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }
  pageChange(newPage: number) {
    this.router.navigate(["/employeedetails"], {
      queryParams: { page: newPage }
    });
  }

  // ngAfterViewInit() {
  //   this._data.getAllemployeedetails().subscribe((data: Employee[]) => {
  //     this.arr = data;
  //   });
  // }
  // ngAfterViewChecked()
  // {
  //   console.log("test");
  // }



  ngOnInit() {
    this._data.getAllemployeedetails().subscribe(
      (data:Employee[])=>{
        this.arr=data;
      }
      );
  }
  onUserDelete(id: number) {
    this._data.deleteemployee(id).subscribe((data: any) => {
      this.ngOnInit();
    });
  }
  confirmDelete(id: number) {
    console.log(id);
    this.confirmationService.confirm({
      message: "Are you sure that you want to delete?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.onUserDelete(id);
        // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
      },
      reject: () => {
        // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
    });
  }
  checkbox(item:Employee){

    this.arr.push(item);
    }

deleteAll(){
// this._data.deleteemployee(this.arr).subscribe(

// (data:any)=>{
// for(this.i=0;this.i<this.arr.length;this.i++)
// {
// if(this.arr.find(x=>x==this.arr[this.i]))
// {
// this.arr.splice(this.arr.indexOf(this.arr[this.i]),1);
// }
// }

// },
// function(err){console.log(err);},
// function(){
// this.delarr=[];
// console.log("Complete");
// }

// );
var result = confirm("Are you sure?");
    if (result) {
      for(let i=0;i<=this.arr.length;i++)
      {
        if(this.arr.find(x=>x==this.arr[i]))
        {
          this.arr.splice(this.arr.indexOf(this.arr[i]),1);

        }
      }
    }
  }





  editemployeeget(item) {
    this.id = item.id;
    this.name = item.name;
    this.description = item.description;
    console.log(item);
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
  onEmployeeSave(f: NgForm) {
    this._data.addemployee(f.value).subscribe((data: any) => {
      this._data.getAllemployeedetails().subscribe((data: Employee[]) => {
        this.arr = data;
      });
      alert("employee added");
    });
  }
  ngOnDestroy() {
    if (this.test) {
      clearInterval(this.test);
    }
  }
}
