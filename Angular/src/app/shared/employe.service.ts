import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employe } from './employe.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  formData: Employe;
  departmentID: number;
  readonly rootURL = "http://localhost:51984/api/employes";
  list: Employe[];
  listForDepartment: Employe[];
  constructor(private http: HttpClient) { }

  
  postEmploye() {
    return this.http.post(this.rootURL, this.formData);
  }

  putEmploye() {
    return this.http.put(this.rootURL + '/' + this.formData.employeId, this.formData);
  }

  deleteEmploye(id) {
    return this.http.delete(this.rootURL + '/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL)
      .toPromise()
      .then(res => this.list = res as Employe[]);
  }

  formatDate(date: Date): string{
    return date.toString();
  }
}
