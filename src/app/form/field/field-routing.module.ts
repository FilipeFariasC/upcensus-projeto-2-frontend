import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldComponent } from './field.component';
import { FieldListComponent } from './field-list/field-list.component';
import { FieldAddComponent } from './field-add/field-add.component';
import AppRoute from 'src/app/approutes.enum';
import { FieldViewComponent } from './field-view/field-view.component';

const routes: Routes = [
  {
    path: '',
    component: FieldComponent,
    children: [
      {
        path: '',
        component: FieldListComponent
      },
      {
        path: AppRoute.REGISTER,
        component: FieldAddComponent
      },
      {
        path: AppRoute.VIEW,
        component: FieldViewComponent
      },
      {
        path: AppRoute.EDIT,
        component: FieldAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldRoutingModule { }
