import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { EmployeeService } from './services/employee.Service';

import { EditDialogComponent } from './components/partials/edit-dialog/edit-dialog.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { DetailViewComponent } from './components/partials/detail-view/detail-view.component';
import { EmployeeListComponent } from './components/partials/employee-list/employee-list.component';
import { EmployeeDialogComponent } from './components/partials/employee-dialog/employee-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailViewComponent,
    EmployeeListComponent,
    EmployeeDialogComponent,
    EditDialogComponent,
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
  
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
