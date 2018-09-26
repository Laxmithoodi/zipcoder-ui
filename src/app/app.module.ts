import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component'

import { HttpClientModule }    from '@angular/common/http';
import { LabIndexComponent } from './lab/index/lab-index.component';
import { LabShowComponent } from './lab/show/lab-show.component';
import { LabFormComponent } from './lab/form/lab-form.component';
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
    HttpClientModule
  ],
  providers: [AuthService, LabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
