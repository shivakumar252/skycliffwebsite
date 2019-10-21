import { Component, OnInit, Inject } from '@angular/core';
import { Employee } from 'src/app/employeedetails/employee';
import { DataService } from 'src/app/employeedetails/data.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmationmsg',
  templateUrl: './confirmationmsg.component.html',
  styleUrls: ['./confirmationmsg.component.css']
})
export class ConfirmationmsgComponent implements OnInit {



  constructor(public dialogRef: MatDialogRef<ConfirmationmsgComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Employee,
              private _data: DataService) { }

  ngOnInit() {
  }
  onUserDelete(id: number) {
    console.log('id:', id);
}
onNoClick(): void {
  this.dialogRef.close();
}

}
