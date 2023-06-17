import { FormControl, Validators } from '@angular/forms';
import { FormAdd } from 'src/app/shared/form/form.model';
import { MetadataRequest, MetadataResponse } from './metadata.model';

export class MetadataAddForm extends FormAdd<MetadataRequest, MetadataResponse> {

  constructor() {
    super({
      code: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      value: new FormControl('', Validators.required),
    });
  }

  get code(): FormControl {
    return this.getControl('code');
  }
  get name(): FormControl {
    return this.getControl('name');
  }
  get valueControl(): FormControl {
    return this.getControl('value');
  }

  set fromModel(model: MetadataResponse) {
    this.patchValue(model);
  }
  get toRequest(): MetadataRequest {
    return {
      code: this.code.value,
      name: this.name.value,
      value: this.valueControl.value
    } as MetadataRequest;
  }
}


