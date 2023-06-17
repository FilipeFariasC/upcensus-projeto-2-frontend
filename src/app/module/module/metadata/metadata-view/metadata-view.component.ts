import { Component } from '@angular/core';
import { BaseViewComponent } from 'src/app/shared/component';
import { MetadataResponse } from '../shared/metadata.model';

@Component({
  selector: 'app-metadata-view',
  templateUrl: './metadata-view.component.html',
  styleUrls: ['./metadata-view.component.scss']
})
export class MetadataViewComponent extends BaseViewComponent<MetadataResponse> {
}
