import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { UiToolkitModule } from '../../ui-toolkit/ui-toolkit.module';
import { AdmNewProjectComponent } from './components/adm-new-project/adm-new-project.component';
import { AdmNewClientComponent } from './components/adm-new-client/adm-new-client.component';
import { AdmClientsComponent } from './components/adm-clients/adm-clients.component';
import { AdmNewTaskComponent } from './components/adm-new-task/adm-new-task.component';
import { AdmNewErojectComponent } from './components/adm-new-eroject/adm-new-eroject.component';
import { AdmNewTaskssComponent } from './components/adm-new-taskss/adm-new-taskss.component';

const routes:Routes = [
  {path:"clients",component:AdmClientsComponent},
  {path:"new-client",component:AdmNewClientComponent},
  {path:"Projects",component:AdmNewErojectComponent},
  {path:"new-project",component:AdmNewProjectComponent},
  {path:"new-task",component:AdmNewTaskComponent},
  {path:"new-taskss",component:AdmNewTaskssComponent},
]

@NgModule({
  imports: [
    SharedModule,
    UiToolkitModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdmNewProjectComponent, AdmNewErojectComponent, AdmNewClientComponent, AdmClientsComponent, AdmNewTaskComponent, AdmNewTaskssComponent]
})
export class AdminModule { }
