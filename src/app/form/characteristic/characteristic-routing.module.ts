import { CharacteristicComponent } from './characteristic.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacteristicListComponent } from './characteristic-list/characteristic-list.component';
import AppRoute from '../../approutes.enum';
import { CharacteristicViewComponent } from './characteristic-view/characteristic-view.component';
import { CharacteristicAddComponent } from './characteristic-add/characteristic-add.component';

const routes: Routes = [
  {
    path: '',
    component: CharacteristicComponent,
    children: [
      {
        path: '',
        component: CharacteristicListComponent
      },
      {
        path: AppRoute.REGISTER,
        component: CharacteristicAddComponent
      },
      {
        path: AppRoute.VIEW,
        component: CharacteristicViewComponent
      },
      {
        path: AppRoute.EDIT,
        component: CharacteristicAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacteristicRoutingModule { }
