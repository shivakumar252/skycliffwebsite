import { Component, OnInit, ViewChild } from "@angular/core";
import { Employee } from "../employeedetails/employee";
import { DataService } from "../employeedetails/data.service";
import { Router, ActivatedRoute } from "@angular/router";
import {
  MatMenuTrigger,
  MatPaginator,
  MatTableDataSource
} from "@angular/material";


@Component({
  selector: "app-contextmenu",
  templateUrl: "./contextmenu.component.html",
  styleUrls: ["./contextmenu.component.css"]
})
export class ContextmenuComponent implements OnInit {
  arr: Employee[] = [];
  dataSource = new MatTableDataSource<Employee>();
  displayedColumns: string[] = ["id", "name", "description"];
  id: string;
  name: string;
  description: string;
  constructor(
    private _data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  ngOnInit() {

    this._data.getAllemployeedetails().subscribe((data: Employee[]) => {
      this.arr = data;
      this.dataSource = new MatTableDataSource<Employee>(this.arr);
      this.dataSource.paginator = this.paginator;
    });
  }
}
