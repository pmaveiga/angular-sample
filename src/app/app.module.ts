import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { ProfileRegisterModule } from './profile-register/profile-register.module';
import { ResumeModule } from './resume/resume.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    HomeModule,
    ProfileRegisterModule,
    ResumeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
