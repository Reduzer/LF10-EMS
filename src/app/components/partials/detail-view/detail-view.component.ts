import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.Service';
import { Employees } from 'src/app/shared/models/employees';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDeleteDialogComponent } from '../employee-delete-dialog/employee-delete-dialog.component';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
})
export class DetailViewComponent implements OnInit {
  employeeId!: number;
  employeeData: Employees;
  skills: string[];

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.employeeId = +params['id'];
      this.loadEmployeeData();
      this.fillSkillList();
    });
  }

  loadEmployeeData() {
    this.employeeService.getEmployeeById(this.employeeId).subscribe(
      (data) => {
        this.employeeData = data;
        console.log('Employee Data:', data);
      },
      (error) => {
        console.error('Error loading employee data:', error);
      }
    );
  }

  openDeleteEmployeeDialog() {
    const dialogRef = this.dialog.open(EmployeeDeleteDialogComponent, {
      data: { employee: this.employeeData },
      panelClass: 'employee-delete-dialog-panel',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.employeeService.triggerAction();
    });
  }

  openEditEmployeeDialog() {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: { employee: this.employeeData },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.employeeService.triggerAction();
    });
  }

  fillSkillList(){
    this.skills = this.employeeData.skillSet;
  }
}
