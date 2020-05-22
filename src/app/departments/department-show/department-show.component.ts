import { Component, OnInit } from '@angular/core';
import { Department } from '../department.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-show',
  templateUrl: './department-show.component.html',
  styleUrls: ['./department-show.component.css'],
})
export class DepartmentShowComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    public departmentService: DepartmentService
  ) {}
  department: Department;
  id: string;

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.id = paramMap.get('id');
        if (this.id === '1') {
          this.department = {
            id: '1',
            courses: [
              { name: 'cc' },
              { name: 'ccccccccccc' },
              { name: 'cccccc' },
              { name: 'cccccccc' },
              { name: 'ccc' },
            ],
            description:
              'sdiasdiasudjashdjkashjdh loremdhas hdjsajd s jahdj hasjdh jashJFD HASJHD JASHFJKHASJ fhuashfkj ksAHF HUfhjkashfj hasdhgfjkasdhgkj jasdlk ghjdsj gkdshjlkgjh dsiljglksdjglkjd sigh8wregiey sghjilsdkhy gujekwGFHUWEfhasdfu ehfuiasdfi hsadufh asdfh ias fi asifhios ahfi oujAS FIJJASifj ioasjfoias f asif oie faSI9FUSAJFKLKDSU9 FJSDJGNKLREUIFGNJWENCVUPnwfenewghuhvASD OASD',
            jobs: [
              { name: 'JJ' },
              { name: 'JJJJJJJJJ' },
              { name: 'JJJ' },
              { name: 'JJJJ' },
              { name: 'JJJJJJJ' },
            ],
            name: 'Softeawfsdnjfs',
            satisfaction: 'dsad',
            skills: [
              { name: 'sssssssss' },
              { name: 'ssss' },
              { name: 'sssss' },
              { name: 'sssss' },
              { name: 'sssss' },
              { name: 'sss' },
            ],
            universities: [
              { name: 'UUUUUUUU' },
              { name: 'uuuu' },
              { name: 'UUUUUU' },
              { name: 'UuuuuuuuU' },
              { name: 'uuUuU' },
            ],
          };
        } else {
          this.departmentService
            .getDepartment(this.id)
            .subscribe((depData: Department) => {
              console.log(depData);
              this.department = depData;
            });
        }
      }
    });
  }
}
