import { NgModule } from '@angular/core';

import { BaseCrudService } from 'src/app/shared/service/base.service';
import { SharedModule } from '../../shared/shared.module';
import { ModuleRoutingModule } from './module-routing.module';
import { ModuleAddComponent } from './module-add/module-add.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleViewComponent } from './module-view/module-view.component';
import { ModuleComponent } from './module.component';
import { ModuleService } from './shared/module.service';


@NgModule({
  declarations: [
    ModuleComponent,
    ModuleAddComponent,
    ModuleListComponent,
    ModuleViewComponent
  ],
  imports: [
    SharedModule,
    ModuleRoutingModule
  ],
  providers: [
    ModuleService,
    {
      provide: BaseCrudService,
      useClass: ModuleService
    }
  ]
})
export class ModuleModule { }
