import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AppRoute from '../approutes.enum';
import { ModuleComponent } from './module.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleComponent,
    children: [
      {
        path: AppRoute.MODULE,
        loadChildren: () => import('./module/module.module').then(module => module.ModuleModule)
      },
      {
        path: AppRoute.TEMPLATE,
        loadChildren: () => import('./template/template.module').then(module => module.TemplateModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
