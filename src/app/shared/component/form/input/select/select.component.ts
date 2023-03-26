
import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';

import { InputComponent } from '../input.component';
import { EnumOption } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-input-select',
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputSelectComponent extends InputComponent {

  @Input() options: EnumOption<any>[] = [];
  @Input() multiple = false;
}