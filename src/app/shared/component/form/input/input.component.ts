import { ChangeDetectorRef, Directive, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Directive()
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export abstract class InputComponent {

  @Input() id = '';
  @Input() label = '';
  @Input() control!: FormControl;
  @Input() required = false;
  @Input() readonly = false;
  @Input() disabled = false;

  @Output() changed = new EventEmitter<Event>();

  constructor(
    protected cdr: ChangeDetectorRef
  ) { }
}
