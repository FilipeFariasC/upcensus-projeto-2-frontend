import { NgModule } from '@angular/core';

import { AnswerRoutingModule } from './answer-routing.module';
import { AnswerComponent } from './answer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnswerListComponent } from './answer-list/answer-list.component';


@NgModule({
  declarations: [
    AnswerComponent,
    AnswerListComponent
  ],
  imports: [
    SharedModule,
    AnswerRoutingModule
  ]
})
export class AnswerModule { }
