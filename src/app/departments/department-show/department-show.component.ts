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
          // this.department = {
          //   id: '1',
          //   courses: ['cc', 'ccccccccccc', 'cccccc', 'cccccccc', 'ccc'],
          //   description:
          //     'sdiasdiasudjashdjkashjdh loremdhas hdjsajd s jahdj hasjdh jashJFD HASJHD JASHFJKHASJ fhuashfkj ksAHF HUfhjkashfj hasdhgfjkasdhgkj jasdlk ghjdsj gkdshjlkgjh dsiljglksdjglkjd sigh8wregiey sghjilsdkhy gujekwGFHUWEfhasdfu ehfuiasdfi hsadufh asdfh ias fi asifhios ahfi oujAS FIJJASifj ioasjfoias f asif oie faSI9FUSAJFKLKDSU9 FJSDJGNKLREUIFGNJWENCVUPnwfenewghuhvASD OASD',
          //   jobs: ['JJ', 'JJJJJJJJJ', 'JJJ', 'JJJJ', 'JJJJJJJ'],
          //   name: 'Softeawfsdnjfs',
          //   satisfaction: 'dsad',
          //   skills: ['sssssssss', 'ssss', 'sssss', 'sssss', 'sssss', 'sss'],
          //   universities: ['UUUUUUUU', 'uuuu', 'UUUUUU', 'UuuuuuuuU', 'uuUuU'],
          // };
        } else {
          this.department = this.departmentService.getDepartment(this.id);
        }
      }
    });
  }
}
