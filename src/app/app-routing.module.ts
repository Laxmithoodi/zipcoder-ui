import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';

import { LabIndexComponent } from './lab/index/lab-index.component';
import { LabShowComponent } from './lab/show/lab-show.component';
import { LabFormComponent } from './lab/form/lab-form.component';

import { StudentIndexComponent } from './student/index/student-index.component';
import { StudentShowComponent } from './student/show/student-show.component';
import { StudentFormComponent } from './student/form/student-form.component';

const routes: Routes = [
  {path: 'auth/:provider/callback', component: AuthComponent},

  // lab
  {path: 'labs/new', component: LabFormComponent},
  {path: 'labs/:id', component: LabShowComponent},
  {path: 'labs', component: LabIndexComponent},

  // student
  {path: 'students/new', component: StudentFormComponent},
  {path: 'students/:id', component: StudentShowComponent},
  {path: 'students', component: StudentIndexComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
