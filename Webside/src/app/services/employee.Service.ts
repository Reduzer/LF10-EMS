import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Employees } from '../shared/models/employees';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8089/employees';

  private actionSubject = new BehaviorSubject<void | null>(null);
  action$ = this.actionSubject.asObservable();

  triggerAction() {
    this.actionSubject.next(null);
  }

  constructor(private http: HttpClient) {}

  getAll(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.apiUrl);
  }

  getEmployeeById(employeeId: number): Observable<Employees> {
    return this.http.get<Employees>(`${this.apiUrl}/${employeeId}`).pipe(
      catchError((error: any) => {
        console.error('Error in getEmployeeById:', error);
        throw error;
      })
    );
  }

  saveEmployee(Data: any) {
    return this.http.post(this.apiUrl, Data);
  }

  deleteEmployeeById(employeeId: number) {
    return this.http.delete<Employees>(`${this.apiUrl}/${employeeId}`);
  }

  updateEmployee(employeeId: number, Data: any) {
    return this.http.put(`${this.apiUrl}/${employeeId}`, Data).pipe(
      catchError((error: any) => {
        console.error('Fehler beim Aktualisieren des Mitarbeiters:', error);
        throw error;
      })
    );
  }

  getEmployeeQualifications(employeeId: number){
    let Url: string = "";

    
  }

}
