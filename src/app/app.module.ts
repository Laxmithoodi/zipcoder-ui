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

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LabIndexComponent,
    LabShowComponent,
    LabFormComponent
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
