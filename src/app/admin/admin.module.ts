import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { HighchartsChartModule } from 'highcharts-angular';

import { MyProfileComponent } from './my-profile/my-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { DashboardService } from '../dashboard.service';
import { ProjectComponent } from './project/project.component';
import { ProjComponent } from './proj/proj.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    MyProfileComponent,
    DashboardComponent,
    AboutComponent,
    ProjectComponent,
    ProjComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    HighchartsChartModule
  ],
  exports:[
    MyProfileComponent,
    DashboardComponent,
    AboutComponent
  ],
  providers: [DashboardService],
})
export class AdminModule { }
