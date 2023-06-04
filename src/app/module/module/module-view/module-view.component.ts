import { Component } from '@angular/core';
import { BaseViewComponent } from 'src/app/shared/component';
import AppRoute from '../../../approutes.enum';
import { ModuleResponse } from '../shared/module.model';

@Component({
  selector: 'app-module-module-view',
  templateUrl: './module-view.component.html',
  styleUrls: ['./module-view.component.scss']
})
export class ModuleViewComponent extends BaseViewComponent<ModuleResponse> {

  get answerRoute(): string[] {
    return [AppRoute.ANSWERS_SUFFIX];
  }
}
