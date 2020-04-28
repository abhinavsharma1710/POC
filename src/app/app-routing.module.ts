import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './admin/about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProjectComponent } from './admin/project/project.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './admin/signup/signup.component';
import { componentFactoryName } from '@angular/compiler';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'about', component:AboutComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'project', component:ProjectComponent},
  {path:'login/signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
