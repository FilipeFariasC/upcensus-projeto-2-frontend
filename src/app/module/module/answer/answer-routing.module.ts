import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerComponent } from './answer.component';
import { AnswerListComponent } from './answer-list/answer-list.component';
import AppRoute from 'src/app/approutes.enum';
import { AnswerViewComponent } from './answer-view/answer-view.component';

const routes: Routes = [
  {
    path: '',
    component: AnswerComponent,
    children: [
      {
        path: '',
        component: AnswerListComponent
      },
      {
        path: AppRoute.ANSWER,
        component: AnswerViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnswerRoutingModule { }
