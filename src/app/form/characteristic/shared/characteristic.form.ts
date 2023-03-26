import { FormControl, Validators } from '@angular/forms';
import { FormAdd } from 'src/app/shared/form/form.model';
import { CharacteristicRequest, CharacteristicResponse } from './characteristic.model';

export class CharacteristicAddForm extends FormAdd<CharacteristicRequest, CharacteristicResponse> {

  constructor() {
    super({
      attribute: new FormControl('', Validators.required),
      value: new FormControl('', Validators.required),
      description: new FormControl(''),
    });
  }

  get attribute(): FormControl {
    return this.getControl('attribute');
  }
  get valueControl(): FormControl {
    return this.getControl('value');
  }
  get description(): FormControl {
    return this.getControl('value');
  }

  fromModel(model: CharacteristicResponse): void {
    this.patchValue(model);
  }
  get toModel(): CharacteristicResponse {
    return {
      attribute: this.attribute.value,
      value: this.valueControl.value,
      description: this.description.value
    } as CharacteristicResponse
  }

}

export { CharacteristicRequest };

