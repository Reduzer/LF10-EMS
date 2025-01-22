import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employees } from 'src/app/shared/models/employee';
import { ActivatedRoute, Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDialogComponent } from '../employee-dialog/employee-dialog.component';
import { EmployeeServiceService } from '../../services/employee-service.service';

@Component({
  selector: 'app-list-employee-view',
  imports: [],
  templateUrl: './list-employee-view.component.html',
  styleUrl: './list-employee-view.component.css'
})
export class ListEmployeeViewComponent {
  employees: Employees[] = [];
  filteredEmployees: Employees[] = [];
  searchForm: FormGroup;
  isAscendingSort = true;

  @ViewChild('searchInput') searchInput: ElementRef | undefined;
  selectedEmployeeIndex: number | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private employeeService: EmployeeServiceService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.searchForm = this.fb.group({
      searchTerm: [''],
    });

    this.employeeService.action$.subscribe(() => {
      this.handleAction();
    });

    this.searchForm.get('searchTerm')?.valueChanges.subscribe((searchTerm) => {
      this.filterEmployees(searchTerm);
    });
  }

  handleEmployeeClick(employeeId: number) {
    this.selectEmployee(employeeId);
    this.navigateToDetail(employeeId);
  }

  selectEmployee(index: number) {
    this.selectedEmployeeIndex = index;
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const selectedEmployee = params['selectedEmployee'];
      this.loadAndSortEmployees();
      if (selectedEmployee) {
        this.selectEmployee(+selectedEmployee);
      }
    });
  }

  loadAndSortEmployees() {
    this.employeeService.getAll().subscribe((data) => {
      this.employees = data;
      this.filterEmployees(this.searchForm.get('searchTerm')?.value);
    });
  }

  filterEmployees(searchTerm: string) {
    searchTerm = searchTerm.toLowerCase();
    this.filteredEmployees = this.employees.filter(
      (employee) =>
        employee.firstName.toLowerCase().includes(searchTerm) ||
        employee.lastName.toLowerCase().includes(searchTerm)
    );
    this.applySort();
  }

  toggleSort() {
    this.isAscendingSort = !this.isAscendingSort;
    this.applySort();
  }

  applySort() {
    this.filteredEmployees = [...this.filteredEmployees];
    this.filteredEmployees.sort((a, b) => {
      const nameA = `${a.lastName} ${a.firstName}`.toLowerCase();
      const nameB = `${b.lastName} ${b.firstName}`.toLowerCase();
      return this.isAscendingSort
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
  }

  navigateToDetail(employeeId: number) {
    this.router.navigate(['/employee', employeeId], {
      queryParams: { selectedEmployee: employeeId },
    });
  }

  openAddEmployeeDialog() {
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      this.loadAndSortEmployees();
      this.selectEmployee(result);
    });
  }

  clearSearch() {
    this.searchForm.get('searchTerm')?.setValue('');
    this.filterEmployees('');

    if (this.searchInput) {
      this.searchInput.nativeElement.focus();
    }
  }

  handleAction(): void {
    this.loadAndSortEmployees();
  }
}
