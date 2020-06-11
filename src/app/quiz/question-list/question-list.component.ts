import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Quiz } from '../quiz.model';
import { Subscription } from 'rxjs';
import { Department } from 'src/app/departments/department.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
})
export class QuestionListComponent implements OnInit, OnDestroy {
  constructor(public quizService: QuizService) {}

  quizes: Quiz[];
  departments: depaData[];
  private quizesSub: Subscription;
  private depsSub: Subscription;
  isLoading = false;

  ngOnInit() {
    this.isLoading = true;
    this.quizesSub = this.quizService
      .getUpdatedQuizesListener()
      .subscribe((quizes: Quiz[]) => {
        this.isLoading = false;
        this.quizes = quizes;
      });
    this.depsSub = this.quizService
      .getUpdatedDepartmentListener()
      .subscribe((deps: depaData[]) => {
        this.departments = deps;
      });
    this.quizService.getQuizes();
  }
  ngOnDestroy() {
    this.quizesSub.unsubscribe();
    this.depsSub.unsubscribe();
  }
}
class depaData {
  id: string;
  name: string;
  score: number;
}
