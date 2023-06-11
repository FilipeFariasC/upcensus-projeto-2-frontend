import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AppRoute from 'src/app/approutes.enum';
import { MetadataAddComponent } from './metadata-add/metadata-add.component';
import { MetadataListComponent } from './metadata-list/metadata-list.component';
import { MetadataViewComponent } from './metadata-view/metadata-view.component';
import { MetadataComponent } from './metadata.component';

const routes: Routes = [
  {
    path: '',
    component: MetadataComponent,
    children: [
      {
        path: '',
        component: MetadataListComponent
      },
      {
        path: AppRoute.REGISTER,
        component: MetadataAddComponent
      },
      {
        path: AppRoute.VIEW,
        component: MetadataViewComponent
      },
      {
        path: AppRoute.EDIT,
        component: MetadataAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetadataRoutingModule { }
