// edit-dialog.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../../../services/employee.Service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-edit-dialog',
    templateUrl: './edit-dialog.component.html',
    styleUrls: ['./edit-dialog.component.css'],
    providers: [EmployeeService],
    standalone: false
})
export class EditDialogComponent implements OnInit {
  employeeData: any;
  tempFirstName: string | undefined;
  tempLastName: string | undefined;
  tempPhone: string | undefined;
  tempStreet: string | undefined;
  tempCity: string | undefined;
  tempPostcode: string | undefined;
  skillSet?: string[] | undefined;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.employeeData = data.employee;
  }

  ngOnInit(): void {
    this.tempFirstName = this.employeeData.firstName;
    this.tempLastName = this.employeeData.lastName;
    this.tempPhone = this.employeeData.phone;
    this.tempStreet = this.employeeData.street;
    this.tempCity = this.employeeData.city;
    this.tempPostcode = this.employeeData.postcode;
  }

  updateEmployee() {
    this.employeeData.firstName = this.tempFirstName;
    this.employeeData.lastName = this.tempLastName;
    this.employeeData.phone = this.tempPhone;
    this.employeeData.street = this.tempStreet;
    this.employeeData.city = this.tempCity;
    this.employeeData.postcode = this.tempPostcode;
    this.employeeData.skillSet = [];

    this.employeeService
      .updateEmployee(this.employeeData.id, this.employeeData)
      .subscribe(
        (response) => {
          console.log('Mitarbeiter erfolgreich aktualisiert:', response);
          this.handleClose();
        },
        (error) => {
          console.error('Fehler beim Aktualisieren des Mitarbeiters:', error);
        }
      );
  }

  handleClose() {
    this.dialogRef.close();
  }
}
