import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../shared/employe.service';
import { DepartmentService } from '../shared/department.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Department } from '../shared/department.model';
import { Employe } from '../shared/employe.model';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {

  constructor(private service: EmployeService, private serviceD: DepartmentService) { }

  ngOnInit() {
    this.service.refreshList();
    this.serviceD.refreshListD();
  }
  p: number = 1;

  getDepartmentID(DepdartmentId) {
    return this.serviceD.listForEmployes.find(item => item.departmentId == DepdartmentId).name;
  }

  getDepartmentOfEmploye(id) {
    this.serviceD.getDepartment(id);
    return this.serviceD.departmentOfEmploye.name;
  }

  fillForm(employe: Employe) {
    debugger;
    this.service.formData.dateBirth = employe.dateBirth;
    this.service.formData.departmentId = employe.departmentId;
    this.service.formData.employeId = employe.employeId;
    this.service.formData.salary = employe.salary;
    this.service.formData.mail = employe.mail;
    this.service.formData.name = employe.name;
    this.service.formData.surname = employe.surname;
  }

  onDelete(EmployeId) {
    debugger;
    this.service.deleteEmploye(EmployeId)
      .subscribe(res => {
        this.service.refreshList();
      },
        err => {
          console.log(err)
        }
      )
  }
}
