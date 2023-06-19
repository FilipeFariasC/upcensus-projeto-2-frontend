import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerComponent } from './answer.component';
import { AnswerListComponent } from './answer-list/answer-list.component';

const routes: Routes = [
  {
    path: '',
    component: AnswerComponent,
    children: [
      {
        path: '',
        component: AnswerListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnswerRoutingModule { }
