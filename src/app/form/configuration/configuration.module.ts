import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseCrudService } from 'src/app/shared/service/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfigurationAddComponent } from './configuration-add/configuration-add.component';
import { ConfigurationListComponent } from './configuration-list/configuration-list.component';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationViewComponent } from './configuration-view/configuration-view.component';
import { ConfigurationComponent } from './configuration.component';
import { ConfigurationService } from './shared/configuration.service';



@NgModule({
  declarations: [
    ConfigurationComponent,
    ConfigurationAddComponent,
    ConfigurationListComponent,
    ConfigurationViewComponent
  ],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    SharedModule
  ],
  providers: [
    ConfigurationService,
    {
      provide: BaseCrudService,
      useClass: ConfigurationService
    }
  ]
})
export class ConfigurationModule { }
