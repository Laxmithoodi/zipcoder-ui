import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { AuthInterceptor } from './api/auth-interceptor';
import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component';
import { CurrentUserProfileComponent } from './current-user-profile/current-user-profile.component';

import { LabFormComponent } from './lab/form/lab-form.component';
import { LabIndexComponent } from './lab/index/lab-index.component';
import { LabShowComponent } from './lab/show/lab-show.component';
import { LabService } from './lab/lab.service';

import { AssessmentFormComponent } from './assessment/form/assessment-form.component';
import { AssessmentIndexComponent } from './assessment/index/assessment-index.component';
import { AssessmentShowComponent } from './assessment/show/assessment-show.component';
import { AssessmentService } from './assessment/assessment.service';

import { SubmissionFormComponent } from './submission/form/submission-form.component';
import { SubmissionIndexComponent } from './submission/index/submission-index.component';
import { SubmissionService } from './submission/submission.service';

import { StudentIndexComponent } from './student/index/student-index.component';
import { StudentShowComponent } from './student/show/student-show.component';
import { StudentFormComponent } from './student/form/student-form.component';
import { StudentService } from './student/student.service';

import { NoteFormComponent } from './note/form/note-form.component';
import { NoteIndexComponent } from './note/index/note-index.component';
import { NoteService } from './note/note.service';

import { HomeComponent } from './home/home.component';
import { AuthLogoutComponent } from './auth/logout/auth-logout.component';
import { LabsComponent } from './student/labs/labs.component';
import { AssessmentsComponent } from './student/assessments/assessments.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LabIndexComponent,
    LabShowComponent,
    LabFormComponent,
    AssessmentIndexComponent,
    AssessmentShowComponent,
    AssessmentFormComponent,
    StudentIndexComponent,
    StudentShowComponent,
    StudentFormComponent,

    NoteIndexComponent,
    NoteFormComponent,

    CurrentUserProfileComponent,
    SubmissionFormComponent,
    SubmissionIndexComponent,
    HomeComponent,
    AuthLogoutComponent,
    LabsComponent,
    AssessmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    LabService,
    AssessmentService,
    StudentService,
    SubmissionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
