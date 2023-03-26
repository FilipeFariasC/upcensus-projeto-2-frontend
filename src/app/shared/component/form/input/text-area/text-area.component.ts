import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { InputComponent } from '../input.component';


@Component({
  selector: 'app-input-text-area',
  templateUrl: './text-area.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextAreaComponent extends InputComponent { }
