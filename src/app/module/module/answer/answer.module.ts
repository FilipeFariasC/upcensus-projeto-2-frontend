import { NgModule } from '@angular/core';

import { AnswerRoutingModule } from './answer-routing.module';
import { AnswerComponent } from './answer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { AnswerViewComponent } from './answer-view/answer-view.component';


@NgModule({
  declarations: [
    AnswerComponent,
    AnswerListComponent,
    AnswerViewComponent
  ],
  imports: [
    SharedModule,
    AnswerRoutingModule
  ]
})
export class AnswerModule { }
