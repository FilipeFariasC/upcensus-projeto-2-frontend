import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AppRoute from 'src/app/approutes.enum';
import { InputTemplateAddComponent } from './input-template-add/input-template-add.component';
import { InputTemplateListComponent } from './input-template-list/input-template-list.component';
import { InputTemplateViewComponent } from './input-template-view/input-template-view.component';
import { InputTemplateComponent } from './input-template.component';

const routes: Routes = [
  {
    path: '',
    component: InputTemplateComponent,
    children: [
      {
        path: '',
        component: InputTemplateListComponent
      },
      {
        path: AppRoute.REGISTER,
        component: InputTemplateAddComponent
      },
      {
        path: AppRoute.VIEW,
        component: InputTemplateViewComponent
      },
      {
        path: AppRoute.EDIT,
        component: InputTemplateAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputTemplateRoutingModule { }
