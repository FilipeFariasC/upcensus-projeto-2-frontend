import { FormControl, Validators } from '@angular/forms';
import { FormAdd } from 'src/app/shared/form/form.model';
import { CharacteristicResponse, CharacteristicRequest } from './characteristic.model';

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
    return this.getControl('description');
  }

  set fromModel(model: CharacteristicResponse) {
    this.patchValue(model);
  }
  get toRequest(): CharacteristicRequest {
    return {
      attribute: this.attribute.value,
      value: this.valueControl.value,
      description: this.description.value
    } as CharacteristicRequest
  }

}

