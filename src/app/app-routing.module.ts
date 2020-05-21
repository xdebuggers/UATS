import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentCreateComponent } from './/departments/department-create/department-create.component';
import { DepartmentListComponent } from './/departments/department-list/department-list.component';

const routes: Routes = [
  { path: '', component: DepartmentListComponent },
  { path: 'departments', component: DepartmentListComponent },
  { path: 'departments/create', component: DepartmentCreateComponent },
  { path: 'departments/edit/:id', component: DepartmentCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
