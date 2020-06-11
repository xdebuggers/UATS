import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentCreateComponent } from './/departments/department-create/department-create.component';
import { DepartmentListComponent } from './/departments/department-list/department-list.component';
import { DepartmentShowComponent } from './departments/department-show/department-show.component';
import { QuestionListComponent } from './quiz/question-list/question-list.component';

const routes: Routes = [
  { path: '', component: DepartmentListComponent },
  { path: 'departments', component: DepartmentListComponent },
  { path: 'departments/create', component: DepartmentCreateComponent },
  { path: 'departments/edit/:id', component: DepartmentCreateComponent },
  { path: 'departments/show/:id', component: DepartmentShowComponent },
  { path: 'quiz', component: QuestionListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
