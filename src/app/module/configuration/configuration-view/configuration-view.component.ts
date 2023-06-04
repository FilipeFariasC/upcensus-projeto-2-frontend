import { Component } from '@angular/core';
import { BaseViewComponent } from 'src/app/shared/component';
import AppRoute from '../../../approutes.enum';
import { ConfigurationResponse } from '../shared/configuration.model';

@Component({
  selector: 'app-configuration-view',
  templateUrl: './configuration-view.component.html',
  styleUrls: ['./configuration-view.component.scss']
})
export class ConfigurationViewComponent extends BaseViewComponent<ConfigurationResponse> {
  viewFieldRoute(id: number): string[] {
    return [`/${AppRoute.FIELD_ABSOLUTE}/${id}`]
  }
}
