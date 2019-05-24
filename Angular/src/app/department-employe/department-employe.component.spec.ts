import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentEmployeComponent } from './department-employe.component';

describe('DepartmentEmployeComponent', () => {
  let component: DepartmentEmployeComponent;
  let fixture: ComponentFixture<DepartmentEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
