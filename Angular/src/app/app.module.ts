import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentRegistrationComponent } from './department-registration/department-registration.component';

import { DepartmentService } from './shared/department.service';
import { EmployeService } from './shared/employe.service';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http"
import { Routes, RouterModule } from '@angular/router';
import { EmployeComponent } from './employe/employe.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { EmployeRegistrationComponent } from './employe-registration/employe-registration.component';
import { Employe } from './shared/employe.model';
import { DepartmentEmployeComponent } from './department-employe/department-employe.component';


const AppRoutes: Routes = [
  { path: 'Department', component: DepartmentRegistrationComponent },
  { path: 'Employe', component: EmployeRegistrationComponent },
  { path: 'Main', component: DepartmentEmployeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    DepartmentListComponent,
    DepartmentRegistrationComponent,
    EmployeComponent,
    EmployeListComponent,
    EmployeRegistrationComponent,
    DepartmentEmployeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [DepartmentService, EmployeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
