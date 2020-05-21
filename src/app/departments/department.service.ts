import { Department } from './department.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DepartmentService {
  constructor(public http: HttpClient) {}
  private departments: Department[] = [
    // {
    //   id: '4',
    //   name: 'IT',
    //   description: 'the it is good',
    //   courses: ['TBL', 'TTS'],
    //   jobs: ['Programmaer', 'manager'],
    //   satisfaction: '100%',
    //   skills: ['swimming', 'problem solving'],
    //   universities: ['KOU', 'SBU'],
    // },
    // {
    //   id: '2',
    //   name: 'BS',
    //   description: '',
    //   courses: [''],
    //   jobs: [''],
    //   satisfaction: '',
    //   skills: [''],
    //   universities: [''],
    // },
    // {
    //   id: '3',
    //   name: 'TS',
    //   description: '',
    //   courses: [''],
    //   jobs: [''],
    //   satisfaction: '',
    //   skills: [''],
    //   universities: [''],
    // },
  ];
  private depsUpdated = new Subject<Department[]>();

  getDepartments() {
    this.http
      .get<Department[]>(`${environment.apiURL}department`)
      .subscribe((depData) => {
        this.departments = depData;
        this.depsUpdated.next([...this.departments]);
      });
  }

  getUpdatedDepartmentsListener() {
    return this.depsUpdated.asObservable();
  }

  addDepartment(department: Department) {
    console.log(department);
    this.http
      .post<{ _id: string }>(`${environment.apiURL}department`, department)
      .subscribe((resData) => {
        department.id = resData._id;
        this.departments.push(department);
        this.depsUpdated.next([...this.departments]);
      });
  }

  deleteDepartment(id: string) {
    const newDeps = this.departments.filter(
      (department) => department.id !== id
    );
    this.departments = newDeps;
    this.depsUpdated.next([...this.departments]);
  }

  getDepartment(id: string) {
    return { ...this.departments.find((d) => d.id === id) };
  }
}
