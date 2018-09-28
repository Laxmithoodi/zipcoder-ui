import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component'

import { LabFormComponent } from './lab/form/lab-form.component';
import { LabIndexComponent } from './lab/index/lab-index.component';
import { LabShowComponent } from './lab/show/lab-show.component';
import { LabService } from './lab/lab.service';
import { StudentIndexComponent } from './student/index/student-index.component';
import { StudentShowComponent } from './student/show/student-show.component';
import { StudentFormComponent } from './student/form/student-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LabIndexComponent,
    LabShowComponent,
    LabFormComponent,
    StudentIndexComponent,
    StudentShowComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, LabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
