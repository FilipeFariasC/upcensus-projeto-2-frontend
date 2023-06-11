import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseCrudService } from 'src/app/shared/service/base.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MetadataAddComponent } from './metadata-add/metadata-add.component';
import { MetadataListComponent } from './metadata-list/metadata-list.component';
import { MetadataRoutingModule } from './metadata-routing.module';
import { MetadataViewComponent } from './metadata-view/metadata-view.component';
import { MetadataComponent } from './metadata.component';
import { MetadataService } from './shared/metadata.service';



@NgModule({
  declarations: [
    MetadataComponent,
    MetadataAddComponent,
    MetadataListComponent,
    MetadataViewComponent
  ],
  imports: [
    CommonModule,
    MetadataRoutingModule,
    SharedModule
  ],
  providers: [
    MetadataService,
    {
      provide: BaseCrudService,
      useClass: MetadataService
    }
  ]
})
export class MetadataModule { }
