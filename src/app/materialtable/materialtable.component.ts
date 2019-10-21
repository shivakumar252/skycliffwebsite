import { Component, OnInit, ViewChild } from "@angular/core";
import { MatMenuTrigger, MatTableDataSource, MatDialog } from "@angular/material";
import { DataService } from "../employeedetails/data.service";
import { Employee } from "../employeedetails/employee";
// import { ConfirmationService } from 'primeng/api';
import { ToastrService } from "ngx-toastr";
import { NgForm } from "@angular/forms";
import { ConfirmationmsgComponent } from './confirmationmsg/confirmationmsg.component';
import { SelectionModel } from '@angular/cdk/collections';
// import { DialogService } from "ngx-bootstrap-modal";

@Component({
  selector: "app-materialtable",
  templateUrl: "./materialtable.component.html",
  styleUrls: ["./materialtable.component.css"]
})
export class MaterialtableComponent {
  displayedColumns: string[] = [ 'select',"id", "name", "description"];
  arr: Employee[] = [];
  dataSource = new MatTableDataSource<Employee>();
  id: number;
  name: string;
  description: string;
  selection = new SelectionModel<Employee>(true, []);

  constructor(
    private _data: DataService,
    private toastr: ToastrService,
    public dialog: MatDialog


  ) {}
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  checkboxLabel(row?: Employee): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  ngOnInit() {
    this._data.getAllemployeedetails().subscribe((data: Employee[]) => {
      this.arr = data;
      this.dataSource = new MatTableDataSource<Employee>(this.arr);
    });
  }
  @ViewChild(MatMenuTrigger, { static: false })
  contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: "0px", y: "0px" };

  onContextMenu(event: MouseEvent, item: Employee) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { item: item };
    this.contextMenu.openMenu();
  }


  onUserDelete(id: number): void {
    console.log('sid:', id);
    const dialogRef = this.dialog.open(ConfirmationmsgComponent, {
      width: '250px',
      data: { id: id }
    });

    /* afterclosed */
    dialogRef.afterClosed().subscribe(result => {
      this.id = result;
      // this.toGetData();
      this._data.deleteemployee(this.id).subscribe (
        () => {
          alert('deleted');
          this.ngOnInit();
        }
      );
      this.toastr.success('Deleted successfully');
      // alert(id);
    });

  }

  removeSelectedRows(){
    this.selection.selected.forEach(item => {
      let index: number = this.arr.findIndex(d => d === item);
      console.log(this.arr.findIndex(d => d === item));
      this.arr.splice(index,1)
      this.dataSource = new MatTableDataSource<Employee>(this.arr);
    });
    this.selection = new SelectionModel<Employee>(true, []);
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
        this.ngOnInit();
        this.arr = data;
      });
      // alert("Record Edited.");
    });
  }
  onEmployeeSave(f: NgForm) {
    this._data.addemployee(f.value).subscribe((data: any) => {
      this._data.getAllemployeedetails().subscribe((data: Employee[]) => {
        this.ngOnInit();
        this.arr = data;
        this.toastr.success("this employee detail is added");
      });
    });
  }
}
