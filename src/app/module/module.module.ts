import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModuleComponent } from './module.component';
import { ModuleRoutingModule } from './module-routing.module';



@NgModule({
  declarations: [
    ModuleComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule
  ]
})
export class ModuleModule { }
