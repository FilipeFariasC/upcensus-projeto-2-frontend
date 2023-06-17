import { FormControl, Validators } from '@angular/forms';
import { FormAdd } from 'src/app/shared/form/form.model';
import { FieldRequest, FieldResponse } from './field.model';

export class FieldAddForm extends FormAdd<FieldRequest, FieldResponse> {

  constructor() {
    super({
      code: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      type: new FormControl('', Validators.required),
      required: new FormControl('', Validators.required),
      characteristics: new FormControl([])
    });
  }

  get code(): FormControl {
    return this.getControl('code');
  }
  get name(): FormControl {
    return this.getControl('name');
  }
  get description(): FormControl {
    return this.getControl('description');
  }
  get type(): FormControl {
    return this.getControl('type');
  }
  get required(): FormControl {
    return this.getControl('required');
  }
  get characteristics(): FormControl {
    return this.getControl('characteristics');
  }

  set fromModel(model: FieldResponse) {
    this.patchValue({
      ...model,
      characteristics: model.characteristics.map(n=>n.id)
    });
  }
  get toRequest(): FieldRequest {
    return {
      code: this.code.value,
      name: this.name.value,
      description: this.description.value,
      type: this.type.value,
      required: this.required.value,
      characteristics: this.characteristics.value
    } as FieldRequest;
  }

}


