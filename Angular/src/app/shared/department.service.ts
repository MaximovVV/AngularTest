import { Injectable } from '@angular/core';
import { Department } from './department.model';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  formData: Department;
  departmentOfEmploye: Department;
  readonly rootURL = "http://localhost:51984";
  list: Department[];
  listForEmployes: Department[];
  constructor(private http: HttpClient) { }


  postDepartment() {
    return this.http.post(this.rootURL + '/api/departments', this.formData);
  }

  putDepartment() {
    return this.http.put(this.rootURL + '/api/departments/' + this.formData.departmentId, this.formData);
  }

  deleteDepartment(id) {
    return this.http.delete(this.rootURL + '/api/departments/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + '/api/departments')
      .toPromise()
      .then(res => this.list = res as Department[]);
  }

  refreshListD() {
    this.http.get(this.rootURL + '/api/departments/')
      .toPromise()
      .then(res => this.listForEmployes = res as Department[]);
  }

  getDepartment(id) {
    this.http.get(this.rootURL + '/api/departments/' + id)
      .subscribe(res => this.departmentOfEmploye = res as Department);
  }
}
