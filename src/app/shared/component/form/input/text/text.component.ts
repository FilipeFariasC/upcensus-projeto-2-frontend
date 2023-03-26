import { Component, ChangeDetectionStrategy } from '@angular/core';
import { InputComponent } from '../input.component';

@Component({
  selector: 'app-input-text',
  templateUrl: './text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTextComponent extends InputComponent { }
