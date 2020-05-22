import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DBService } from '../../services/db.service';
import { Department } from '../department.model';
import { DepartmentService } from '../department.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-create',
  templateUrl: './department-create.component.html',
  styleUrls: ['./department-create.component.css'],
})
export class DepartmentCreateComponent implements OnInit {
  constructor(
    public dBService: DBService,
    public fb: FormBuilder,
    public departmentService: DepartmentService,
    public router: Router,
    public route: ActivatedRoute
  ) {}
  private mode = 'a';
  private id: string;
  department: Department;
  jobsList;
  skillsList;
  universitiesList;
  coursesList;
  depForm: FormGroup;

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'e';
        this.id = paramMap.get('id');
        this.departmentService
          .getDepartment(this.id)
          .subscribe((depData: Department) => {
            this.department = depData;
          });
      } else {
        this.mode = 'a';
        this.id = null;
      }
    });

    this.dBService.getJobs().subscribe((Data) => {
      this.jobsList = Data;
    });
    this.dBService.getSkills().subscribe((Data) => {
      this.skillsList = Data;
    });
    this.dBService.getUniversties().subscribe((Data) => {
      this.universitiesList = Data;
    });
    this.dBService.getCourses().subscribe((Data) => {
      this.coursesList = Data;
    });

    this.depForm = this.fb.group({
      name: this.department ? this.department.name : '',
      description: this.department ? this.department.description : '',
      satisfaction: this.department ? this.department.satisfaction : '',
      courses: this.department ? this.department.courses : [],
      skills: this.department ? this.department.skills : [],
      universities: this.department ? this.department.universities : [],
      jobs: this.department ? this.department.jobs : [],
    });
  }

  onSubmit() {
    var department: Department = {
      id: '0',
      name: this.depForm.value.name,
      description: this.depForm.value.description,
      satisfaction: this.depForm.value.satisfaction,
      courses: [],
      skills: [],
      jobs: [],
      universities: [],
    };
    this.depForm.value.courses.forEach((element) => {
      department.courses.push({ name: element });
    });
    this.depForm.value.skills.forEach((element) => {
      department.skills.push({ name: element });
    });
    this.depForm.value.jobs.forEach((element) => {
      department.jobs.push({ name: element });
    });
    this.depForm.value.universities.forEach((element) => {
      department.universities.push({ name: element });
    });

    this.departmentService.addDepartment(department);
    this.router.navigate(['departments']);
  }
}
