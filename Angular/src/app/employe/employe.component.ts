import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../shared/employe.service';
import { NgForm } from '@angular/forms';

import { DepartmentService } from '../shared/department.service';
import { debug } from 'util';


@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styles: []
})
export class EmployeComponent implements OnInit {

  date: Date;
  constructor(private serviceEmploye: EmployeService, private serviceDepartment: DepartmentService) { }

  ngOnInit() {
    this.resetForm();
    this.serviceDepartment.refreshList();
  }

  resetForm(form?: NgForm) {
    if(form != null)
      form.resetForm();
    this.serviceEmploye.formData = {
      employeId : 0,
      name : '',
      surname: '',
      dateBirth: '',
      salary: 0,
      departmentId: 0,
      mail: '',
    }
  }

  onSubmit(form: NgForm) {
    debugger;
    this.updateDate();

    if (this.serviceEmploye.formData.employeId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }


  insertRecord(form: NgForm) {
    this.serviceEmploye.postEmploye().subscribe(
      res => {
       // this.resetForm(form);
        this.serviceEmploye.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm) {
    debugger;
    this.serviceEmploye.putEmploye().subscribe(
      res => {
        this.resetForm(form);
        this.serviceEmploye.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateDate() {
    this.serviceEmploye.formData.dateBirth = this.date.toString();
  }

}
