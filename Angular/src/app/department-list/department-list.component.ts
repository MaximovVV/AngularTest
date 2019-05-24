import { Component, OnInit, ViewChild} from '@angular/core';
import { Department } from '../shared/department.model';
import { DepartmentService } from '../shared/department.service';
import { MatPaginatorModule } from '@angular/material';
import { MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  list: Department[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Department>(this.service.list);
  p: number = 1;

  constructor(private service: DepartmentService) { }

  ngOnInit() {
    this.service.refreshList();
    this.dataSource.paginator = this.paginator;
  }



  fillForm(department: Department) {
    debugger;
    this.service.formData = department;
  }

  onDelete(departmentId) {
    debugger;
    this.service.deleteDepartment(departmentId)
      .subscribe(res => {
        this.service.refreshList();
      },
      err => {
        console.log(err)
      }
    )
  }
}
