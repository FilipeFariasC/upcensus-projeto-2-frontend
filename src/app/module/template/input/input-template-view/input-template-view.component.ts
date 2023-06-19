import { Component } from '@angular/core';
import AppRoute from 'src/app/approutes.enum';
import { BaseViewComponent } from 'src/app/shared/component';
import { InputTemplateResponse } from '../shared/input-template.model';

@Component({
  selector: 'app-input-template-view',
  templateUrl: './input-template-view.component.html',
  styleUrls: ['./input-template-view.component.scss']
})
export class InputTemplateViewComponent extends BaseViewComponent<InputTemplateResponse> {
  viewFieldRoute(id: number): string[] {
    return [`/${AppRoute.FIELD_ABSOLUTE}/${id}`]
  }
}
