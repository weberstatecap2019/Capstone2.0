import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionForumComponent } from './question-forum/question-forum.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { EmployerComponent } from './employer/employer.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user.component';
import { AuthenticationGaurd } from './services/authentication.guard';
import { LoginFormComponent } from './users/login-form.component';
import { RegisterFormComponent } from './users/register-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    QuestionForumComponent,
    JobListingComponent,
    EmployerComponent,
    HomeComponent,
    UserComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthenticationGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
