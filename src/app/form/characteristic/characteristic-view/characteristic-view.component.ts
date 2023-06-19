import { Component } from '@angular/core';
import { BaseViewComponent } from 'src/app/shared/component';
import { CharacteristicResponse } from '../shared/characteristic.model';
import AppRoute from '../../../approutes.enum';

@Component({
  selector: 'app-characteristic-view',
  templateUrl: './characteristic-view.component.html',
  styleUrls: ['./characteristic-view.component.scss']
})
export class CharacteristicViewComponent extends BaseViewComponent<CharacteristicResponse> {
}
