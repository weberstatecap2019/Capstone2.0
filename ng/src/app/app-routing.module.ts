import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployerComponent } from './employer/employer.component';
import { JobsComponent } from './job-listing/job-listings.component';
import { QuestionForumComponent } from './question-forum/question-forum.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './users/login-form.component';
import { RegisterFormComponent } from './users/register-form.component';

const routes: Routes = [ 
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{path: 'home/employer', component: EmployerComponent},
{path: 'home/job_listings', component: JobsComponent},
{path: 'home/question_forum', component: QuestionForumComponent},
{path: 'home', component: HomeComponent},
{path: 'login', component: LoginFormComponent},
{path: 'register', component: RegisterFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
