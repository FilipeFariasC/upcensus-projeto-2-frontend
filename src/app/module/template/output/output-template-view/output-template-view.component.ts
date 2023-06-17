import { Component } from '@angular/core';
import AppRoute from 'src/app/approutes.enum';
import { BaseViewComponent } from 'src/app/shared/component';
import { OutputTemplateResponse } from '../shared/output-template.model';

@Component({
  selector: 'app-output-template-view',
  templateUrl: './output-template-view.component.html',
  styleUrls: ['./output-template-view.component.scss']
})
export class OutputTemplateViewComponent extends BaseViewComponent<OutputTemplateResponse> {

}
