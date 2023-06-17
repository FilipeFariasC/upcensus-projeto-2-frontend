import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutputTemplateComponent } from './output-template.component';
import { OutputTemplateListComponent } from './output-template-list/output-template-list.component';
import { OutputTemplateAddComponent } from './output-template-add/output-template-add.component';
import { OutputTemplateViewComponent } from './output-template-view/output-template-view.component';
import AppRoute from 'src/app/approutes.enum';

const routes: Routes = [
  {
    path: '',
    component: OutputTemplateComponent,
    children: [
      {
        path: '',
        component: OutputTemplateListComponent
      },
      {
        path: AppRoute.REGISTER,
        component: OutputTemplateAddComponent
      },
      {
        path: AppRoute.VIEW,
        component: OutputTemplateViewComponent
      },
      {
        path: AppRoute.EDIT,
        component: OutputTemplateAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutputTemplateRoutingModule { }
