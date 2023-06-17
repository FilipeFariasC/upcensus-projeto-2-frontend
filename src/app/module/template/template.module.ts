import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { TemplateComponent } from './template.component';
import { TemplateRoutingModule } from './template-routing.module';


@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    SharedModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
