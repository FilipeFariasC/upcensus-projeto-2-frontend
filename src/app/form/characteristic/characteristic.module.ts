import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacteristicRoutingModule } from './characteristic-routing.module';
import { CharacteristicAddComponent } from './characteristic-add/characteristic-add.component';
import { CharacteristicListComponent } from './characteristic-list/characteristic-list.component';
import { CharacteristicViewComponent } from './characteristic-view/characteristic-view.component';
import { CharacteristicComponent } from './characteristic.component';
import { CharacteristicService } from './shared/characteristic.service';
import { BaseCrudService } from 'src/app/shared/service/base.service';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    CharacteristicComponent,
    CharacteristicAddComponent,
    CharacteristicListComponent,
    CharacteristicViewComponent
  ],
  imports: [
    SharedModule,
    CharacteristicRoutingModule
  ],
  providers: [
    CharacteristicService,
    {
      provide: BaseCrudService,
      useClass: CharacteristicService
    }
  ]
})
export class CharacteristicModule { }
