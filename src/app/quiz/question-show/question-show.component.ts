import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Subscription } from 'rxjs';
import { Quiz } from '../quiz.model';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-question-show',
  templateUrl: './question-show.component.html',
  styleUrls: ['./question-show.component.css'],
})
export class QuestionShowComponent implements OnInit {
  constructor(public quizService: QuizService) {}

  faCheckCircle = faCheckCircle;
  question: queData;
  private queSub: Subscription;
  isLoading = false;
  questionNumber = 1;

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
    this.questionNumber++;
  }
  onNo() {
    this.quizService.result(0, this.question.id);
    this.questionNumber++;
  }
}
class queData {
  id: string;
  content: string;
}
