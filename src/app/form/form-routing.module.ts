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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
