import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FieldRoutingModule } from './field-routing.module';
import { FieldListComponent } from './field-list/field-list.component';
import { FieldComponent } from './field.component';
import { FieldAddComponent } from './field-add/field-add.component';
import { FieldViewComponent } from './field-view/field-view.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FieldService } from './shared/field.service';
import { BaseCrudService } from 'src/app/shared/service/base.service';


@NgModule({
  declarations: [
    FieldComponent,
    FieldAddComponent,
    FieldListComponent,
    FieldViewComponent
  ],
  imports: [
    CommonModule,
    FieldRoutingModule,
    SharedModule
  ],
  providers: [
    FieldService,
    {
      provide: BaseCrudService,
      useClass: FieldService
    }
  ]
})
export class FieldModule { }
