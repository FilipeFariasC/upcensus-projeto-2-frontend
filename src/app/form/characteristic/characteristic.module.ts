import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacteristicRoutingModule } from './characteristic-routing.module';
import { CharacteristicAddComponent } from './characteristic-add/characteristic-add.component';
import { CharacteristicListComponent } from './characteristic-list/characteristic-list.component';
import { CharacteristicViewComponent } from './characteristic-view/characteristic-view.component';
import { CharacteristicComponent } from './characteristic.component';


@NgModule({
  declarations: [
    CharacteristicComponent,
    CharacteristicAddComponent,
    CharacteristicListComponent,
    CharacteristicViewComponent
  ],
  imports: [
    CommonModule,
    CharacteristicRoutingModule
  ]
})
export class CharacteristicModule { }
