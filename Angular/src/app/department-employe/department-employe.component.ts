import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../shared/employe.service';
import { DepartmentService } from '../shared/department.service';
import { Department } from '../shared/department.model';
import { Employe } from '../shared/employe.model';

@Component({
  selector: 'app-department-employe',
  templateUrl: './department-employe.component.html',
  styleUrls: ['./department-employe.component.css']
})
export class DepartmentEmployeComponent implements OnInit {
  pageEmploye: number = 1;
  pageDepartment: number = 1;

  constructor(private serviceEmploye: EmployeService, private serviceDepartment: DepartmentService) { }

  ngOnInit() {
    this.serviceEmploye.refreshList();
    this.serviceDepartment.refreshList();
    this.serviceDepartment.refreshListD();
  }

  getDepartment(DepdartmentId) {
    return this.serviceDepartment.listForEmployes.find(item => item.departmentId == DepdartmentId).name;
  }

  getEmploye(DepdartmentId) {
    this.serviceEmploye.list = this.serviceEmploye.list.filter(item => item.departmentId == DepdartmentId);
  }


}
