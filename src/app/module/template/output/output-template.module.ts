import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { OutputTemplateAddComponent } from './output-template-add/output-template-add.component';
import { OutputTemplateListComponent } from './output-template-list/output-template-list.component';
import { OutputTemplateRoutingModule } from './output-template-routing.module';
import { OutputTemplateViewComponent } from './output-template-view/output-template-view.component';
import { OutputTemplateComponent } from './output-template.component';
import { OutputTemplateService } from './shared/output-template.service';
import { BaseCrudService } from 'src/app/shared/service/base.service';


@NgModule({
  declarations: [
    OutputTemplateComponent,
    OutputTemplateAddComponent,
    OutputTemplateListComponent,
    OutputTemplateViewComponent
  ],
  imports: [
    SharedModule,
    OutputTemplateRoutingModule
  ],
  providers: [
    OutputTemplateService,
    {
      provide: BaseCrudService,
      useClass: OutputTemplateService
    }
  ]
})
export class OutputTemplateModule { }
