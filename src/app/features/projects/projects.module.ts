import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './Pages/project-list/project-list.component';
import { ProjectFormComponent } from './Pages/project-form/project-form.component';
import { ProjectDetailsComponent } from './Pages/project-details/project-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes:Routes = [
  {
    path:'list',
    component: ProjectListComponent
  },
  {
    path:'form',
    component: ProjectFormComponent
  },
  {
    path:'details/:id',
    component: ProjectDetailsComponent
  },
  {
    path:'',
    redirectTo:'list',
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectFormComponent,
    ProjectDetailsComponent
  ],
  imports: [
  CommonModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule
  ]
})
export class ProjectsModule { }
