import { Component } from '@angular/core';
import { BaseViewComponent } from 'src/app/shared/component';
import AppRoute from '../../../approutes.enum';
import { FieldResponse } from '../shared/field.model';

@Component({
  selector: 'app-field-view',
  templateUrl: './field-view.component.html',
  styleUrls: ['./field-view.component.scss']
})
export class FieldViewComponent extends BaseViewComponent<FieldResponse> {

}
