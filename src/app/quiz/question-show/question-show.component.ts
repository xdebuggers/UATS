import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Subscription } from 'rxjs';
import { Quiz } from '../quiz.model';

@Component({
  selector: 'app-question-show',
  templateUrl: './question-show.component.html',
  styleUrls: ['./question-show.component.css'],
})
export class QuestionShowComponent implements OnInit {
  constructor(public quizService: QuizService) {}

  question: queData;
  private queSub: Subscription;
  isLoading = false;

  ngOnInit() {
    this.isLoading = true;
    this.queSub = this.quizService
      .getUpdatedQuestionListener()
      .subscribe((que: queData) => {
        this.isLoading = false;
        this.question = que;
      });
  }
  ngOnDestroy() {
    this.queSub.unsubscribe();
  }
  onYes() {
    this.quizService.result(1, this.question.id);
  }
  onNo() {
    this.quizService.result(0, this.question.id);
  }
}
class queData {
  id: string;
  content: string;
}
