import { FormControl, Validators } from '@angular/forms';
import { FormAdd } from 'src/app/shared/form/form.model';
import { OutputTemplateRequest, OutputTemplateResponse } from './output-template.model';

export class OutputTemplateAddForm extends FormAdd<OutputTemplateRequest, OutputTemplateResponse> {

  constructor() {
    super({
      code: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      layout: new FormControl('', Validators.required)
    });
  }

  get code(): FormControl {
    return this.getControl('code');
  }
  get name(): FormControl {
    return this.getControl('name');
  }
  get layout(): FormControl {
    return this.getControl('layout');
  }

  set fromModel(model: OutputTemplateResponse) {
    this.patchValue(model);
  }
  get toRequest(): OutputTemplateRequest {
    return {
      code: this.code.value,
      name: this.name.value,
      layout: this.layout.value
    } as OutputTemplateRequest;
  }

}


