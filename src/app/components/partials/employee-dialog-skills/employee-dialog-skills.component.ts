import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.Service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Employees } from 'src/app/shared/models/employees';

@Component({
    selector: 'app-employee-dialog-skills',
    imports: [],
    templateUrl: './employee-dialog-skills.component.html',
    styleUrl: './employee-dialog-skills.component.css'
})
export class EmployeeDialogSkillsComponent {
  
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    public dialogRef: MatDialogRef<EmployeeDialogSkillsComponent>,
    private dialog: MatDialog,
    public employeeGiven: Employees
  ) {}

  addSkills(){
    this.employeeService.saveEmployee(this.employeeGiven).subscribe(
      (result: any) => {
        console.warn(result);

        if (result && result.id) {
          const newEmployeeId = result.id;

          this.dialogRef.close(newEmployeeId);

          this.router.navigate(['/employee', newEmployeeId]);
        }
      }
    ); 
  }

  abbrechen() {
    this.dialogRef.close();
  }
}
