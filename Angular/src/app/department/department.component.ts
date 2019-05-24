import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../shared/department.service';
import { Department } from '../shared/department.model';
import { NgForm } from '@angular/forms';
import { debug } from 'util';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styles: []
})
export class DepartmentComponent implements OnInit {

  constructor(private service: DepartmentService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      departmentId: 0,
      name: ''
    }
  }

  onSubmit(form: NgForm) {
    
    if (this.service.formData.departmentId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);

  }

  insertRecord(form: NgForm) {
    this.service.postDepartment().subscribe(
      res => {
        //this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm) {
    this.service.putDepartment().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }
 
}
