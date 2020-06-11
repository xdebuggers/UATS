import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Quiz } from './quiz.model';
import { Department } from '../departments/department.model';

@Injectable({ providedIn: 'root' })
export class QuizService {
  constructor(public http: HttpClient) {}

  private quizes: Quiz[];
  private quizesUpdated = new Subject<Quiz[]>();
  departments: depaData[];
  quistions: queData[];
  private depUpdated = new Subject<depaData[]>();

  selectedQuestion: queData;
  private queUpdated = new Subject<queData>();

  getQuizes() {
    this.http.get<Quiz[]>(`${environment.apiURL}quiz`).subscribe((quizData) => {
      this.quizes = quizData;
      this.quizesUpdated.next([...this.quizes]);
      this.getDepartarnts(quizData);
      this.getQuestions(quizData);
    });
  }

  getUpdatedQuizesListener() {
    return this.quizesUpdated.asObservable();
  }

  getUpdatedDepartmentListener() {
    return this.depUpdated.asObservable();
  }

  getUpdatedQuestionListener() {
    return this.queUpdated.asObservable();
  }

  getDepartarnts(quizes: Quiz[]) {
    let data: depaData[] = [];
    let ids = [];
    quizes.forEach((quiz) => {
      if (!ids.find((id) => id == quiz.department.id)) {
        ids.push(quiz.department.id);
        const d: depaData = {
          id: quiz.department.id,
          name: quiz.department.name,
          score: 50,
        };
        data.push(d);
      }
    });
    this.departments = data;
    this.depUpdated.next([...this.departments]);
  }
  result(b: number, id: string) {
    this.quizes.forEach((q) => {
      if (q.question.id == id) {
        if (q.answer_value == b) {
          this.departments.forEach((d) => {
            if (d.id == q.department.id) {
              d.score += q.score;
            }
          });
        }
      }
    });
    this.depUpdated.next([...this.departments]);
    if (this.quistions.length != 0) {
      this.selectedQuestion = this.quistions.pop();
      this.queUpdated.next(this.selectedQuestion);
    } else {
      this.selectedQuestion = null;
      this.queUpdated.next(this.selectedQuestion);
    }
  }

  getQuestions(quizes: Quiz[]) {
    let data: queData[] = [];
    let ids = [];
    quizes.forEach((quiz) => {
      if (!ids.find((id) => id == quiz.question.id)) {
        ids.push(quiz.question.id);
        const d: queData = {
          id: quiz.question.id,
          content: quiz.question.content,
        };
        data.push(d);
      }
    });
    this.quistions = data;
    this.selectedQuestion = this.quistions.pop();
    this.queUpdated.next(this.selectedQuestion);
  }
}
class depaData {
  id: string;
  name: string;
  score: number;
}

class queData {
  id: string;
  content: string;
}
