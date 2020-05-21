import { Component, OnInit, OnDestroy } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../department.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit, OnDestroy {
  constructor(public departmentService: DepartmentService) {}
  departments: Department[];
  private depsSub: Subscription;
  displayedColumns: string[] = [
    'id',
    'name',
    'desc',
    'satisfaction',
    'info',
    'update',
    'delete',
  ];

  ngOnInit() {
    this.depsSub = this.departmentService
      .getUpdatedDepartmentsListener()
      .subscribe((deps: Department[]) => {
        this.departments = deps;
      });
    this.departmentService.getDepartments();
  }
  ngOnDestroy() {
    this.depsSub.unsubscribe();
  }

  onDelete(id: string) {
    this.departmentService.deleteDepartment(id);
  }
}
