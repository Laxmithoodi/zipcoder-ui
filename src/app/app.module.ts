import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabComponent } from './lab/lab.component';

import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component'

import { HttpClientModule }    from '@angular/common/http';
import { LabIndexComponent } from './lab/index/lab-index.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LabComponent,
    LabIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
