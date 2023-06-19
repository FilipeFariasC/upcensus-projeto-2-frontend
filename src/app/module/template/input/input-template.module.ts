import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { InputTemplateAddComponent } from './input-template-add/input-template-add.component';
import { InputTemplateListComponent } from './input-template-list/input-template-list.component';
import { InputTemplateRoutingModule } from './input-template-routing.module';
import { InputTemplateViewComponent } from './input-template-view/input-template-view.component';
import { InputTemplateComponent } from './input-template.component';
import { InputTemplateService } from './shared/input-template.service';
import { BaseCrudService } from 'src/app/shared/service/base.service';
import { MappingAddComponent } from './input-template-add/mapping-add/mapping-add.component';


@NgModule({
  declarations: [
    InputTemplateComponent,
    InputTemplateAddComponent,
    InputTemplateListComponent,
    InputTemplateViewComponent,
    MappingAddComponent
  ],
  imports: [
    SharedModule,
    InputTemplateRoutingModule
  ],
  providers: [
    InputTemplateService,
    {
      provide: BaseCrudService,
      useClass: InputTemplateService
    }
  ]
})
export class InputTemplateModule { }
