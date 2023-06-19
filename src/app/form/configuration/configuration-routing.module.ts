import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AppRoute from 'src/app/approutes.enum';
import { ConfigurationAddComponent } from './configuration-add/configuration-add.component';
import { ConfigurationListComponent } from './configuration-list/configuration-list.component';
import { ConfigurationViewComponent } from './configuration-view/configuration-view.component';
import { ConfigurationComponent } from './configuration.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationComponent,
    children: [
      {
        path: '',
        component: ConfigurationListComponent
      },
      {
        path: AppRoute.REGISTER,
        component: ConfigurationAddComponent
      },
      {
        path: AppRoute.VIEW,
        component: ConfigurationViewComponent
      },
      {
        path: AppRoute.EDIT,
        component: ConfigurationAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
