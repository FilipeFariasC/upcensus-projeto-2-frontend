import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AppRoute from 'src/app/approutes.enum';
import { TemplateComponent } from './template.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: AppRoute.INPUT,
        loadChildren: () => import('./input/input-template.module').then(module => module.InputTemplateModule)
      },
      {
        path: AppRoute.OUTPUT,
        loadChildren: () => import('./output/output-template.module').then(module => module.OutputTemplateModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
