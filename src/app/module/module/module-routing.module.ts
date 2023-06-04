import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AppRoute from '../../approutes.enum';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleAddComponent } from './module-add/module-add.component';
import { ModuleViewComponent } from './module-view/module-view.component';
import { ModuleComponent } from '../module.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleComponent,
    children: [
      {
        path: '',
        component: ModuleListComponent
      },
      {
        path: AppRoute.REGISTER,
        component: ModuleAddComponent
      },
      {
        path: AppRoute.VIEW,
        component: ModuleViewComponent
      },
      {
        path: AppRoute.EDIT,
        component: ModuleAddComponent
      },
      {
        path: AppRoute.ANSWERS,
        loadChildren: () => import('./answer/answer.module').then(module => module.AnswerModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
