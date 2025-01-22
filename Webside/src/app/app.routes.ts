import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DetailViewComponent } from './components/detail-dialog/detail-view.component';

export const routes: Routes = [
  { path: '', component: DetailViewComponent },
  { path: 'employee/:id', component: DetailViewComponent },
];
