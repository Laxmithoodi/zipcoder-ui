import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { AuthLogoutComponent } from './auth/logout/auth-logout.component';

import { LabIndexComponent } from './lab/index/lab-index.component';
import { LabShowComponent } from './lab/show/lab-show.component';
import { LabFormComponent } from './lab/form/lab-form.component';

import { NoteIndexComponent } from './note/index/note-index.component';
import { NoteFormComponent } from './note/form/note-form.component';

import { AssessmentIndexComponent } from './assessment/index/assessment-index.component';
import { AssessmentShowComponent } from './assessment/show/assessment-show.component';
import { AssessmentFormComponent } from './assessment/form/assessment-form.component';

import { GradeFormComponent } from './assessment/grade/form/form.component';

import { SubmissionIndexComponent } from './submission/index/submission-index.component';
import { SubmissionFormComponent } from './submission/form/submission-form.component';

import { StudentIndexComponent } from './student/index/student-index.component';
import { StudentShowComponent } from './student/show/student-show.component';
import { StudentFormComponent } from './student/form/student-form.component';
import { CurrentUserProfileComponent } from './current-user-profile/current-user-profile.component';

import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'auth/logout', component: AuthLogoutComponent},
  {path: 'auth/:provider/callback', component: AuthComponent},
  {path: 'profile', component: CurrentUserProfileComponent},

  {path: 'admin',
     canActivate: [AuthGuard],
     children: [
       // labs
       {path: 'labs/new', component: LabFormComponent},
       {path: 'labs/:id/edit', component: LabFormComponent},
       {path: 'labs/:id', component: LabShowComponent},
       {path: 'labs', component: LabIndexComponent},

       // assessments
       {path: 'assessments/new', component: AssessmentFormComponent},
       {path: 'assessments/:id/edit', component: AssessmentFormComponent},
       {path: 'assessments/:id', component: AssessmentShowComponent},
       {path: 'assessments', component: AssessmentIndexComponent},

       // student
       {path: 'students/new', component: StudentFormComponent},
       {path: 'students/:id/edit', component: StudentFormComponent},
       {path: 'students/:id', component: StudentShowComponent},
       {path: 'students', component: StudentIndexComponent},

       // submissions
       {path: 'submissions/new', component: SubmissionFormComponent},
       {path: 'submissions', component: SubmissionIndexComponent},
       {path: 'submissions/:id/edit', component: SubmissionFormComponent},

       // note
       {path: 'students/:student_id/notes/new', component: NoteFormComponent},
       {path: 'students/:student_id/notes/:id/edit', component: NoteFormComponent},

       // grade
       {path: 'grades/:id/edit', component: GradeFormComponent},
     ]
   },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
