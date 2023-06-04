import { FormControl, Validators } from '@angular/forms';
import { FormAdd } from 'src/app/shared/form/form.model';
import { ModuleRequest, ModuleResponse } from './module.model';

export class ModuleAddForm extends FormAdd<ModuleRequest, ModuleResponse> {

  constructor() {
    super({
      code: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      tags: new FormControl([]),
      configuration: new FormControl([]),
      input_templates: new FormControl([]),
      output_template: new FormControl(''),
    });
  }

  get code(): FormControl {
    return this.getControl('code');
  }
  get name(): FormControl {
    return this.getControl('name');
  }
  get tags(): FormControl {
    return this.getControl('tags');
  }
  get configuration(): FormControl {
    return this.getControl('configuration');
  }
  get inputTemplates(): FormControl {
    return this.getControl('input_templates');
  }
  get outputTemplate(): FormControl {
    return this.getControl('output_template');
  }

  set fromModel(model: ModuleResponse) {
    this.patchValue({
      ...model,
      configuration: model.configuration.code,
      input_templates: model.input_templates.map(n=>n.code),
      output_template: model.output_template.code
    });
  }
  get toRequest(): ModuleRequest {
    return {
      code: this.code.value,
      name: this.name.value,
      tags: this.tags.value,
      input_templates: this.inputTemplates.value,
      output_template: this.outputTemplate.value
    } as ModuleRequest
  }

}

