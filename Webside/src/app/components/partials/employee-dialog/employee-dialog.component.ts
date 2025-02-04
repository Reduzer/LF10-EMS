import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.Service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EmployeeDialogSkillsComponent } from '../employee-dialog-skills/employee-dialog-skills.component';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css'],
  providers: [EmployeeService],
})
export class EmployeeDialogComponent {
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    public dialogRef: MatDialogRef<EmployeeDialogComponent>,
    private dialog: MatDialog
  ) {}
  
  openEmployeeSkillsDialog() {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(EmployeeDialogSkillsComponent, {});
    
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addEmployee(Data: any){

  }

  abbrechen() {
    this.dialogRef.close();
  }
}
