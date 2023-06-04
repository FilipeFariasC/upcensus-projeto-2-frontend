import { FormComponent } from './form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AppRoute from '../approutes.enum';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    children: [
      {
        path: AppRoute.CHARACTERISTIC,
        loadChildren: () => import('./characteristic/characteristic.module').then(module => module.CharacteristicModule)
      },
      {
        path: AppRoute.FIELD,
        loadChildren: () => import('./field/field.module').then(module => module.FieldModule)
      },
      {
        path: AppRoute.CONFIGURATION,
        loadChildren: () => import('./configuration/configuration.module').then(module => module.ConfigurationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
