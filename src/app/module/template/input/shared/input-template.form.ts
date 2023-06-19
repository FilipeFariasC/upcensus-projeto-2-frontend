import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormAdd } from 'src/app/shared/form/form.model';
import { InputTemplateRequest, InputTemplateResponse, Mapping } from './input-template.model';


export interface FieldMap {
  field: string;
  mapping: string;
}

export class InputTemplateMappingAddForm extends FormGroup {
  constructor(fieldMap?: FieldMap) {
    super({
      field: new FormControl(fieldMap?.field || '', Validators.required),
      mapping: new FormControl(fieldMap?.mapping || '', Validators.required)
    })
  }

  get field(): FormControl {
    return this.get('field') as FormControl;
  }
  get mapping(): FormControl {
    return this.get('mapping') as FormControl;
  }

  get toRequest(): Mapping {
    const obj: Mapping = {};

    obj[this.field.value] = this.mapping.value
    return obj;
  }
}
export class InputTemplateMappingsAddForm extends FormArray {
  constructor() {
    super([
      new InputTemplateMappingAddForm()
    ], Validators.required)
  }

  addItem(fieldMap?: FieldMap): void {
    this.insert(length, new InputTemplateMappingAddForm(fieldMap));
  }

  get toRequest(): Mapping {
    const obj: Mapping = {};
    for (let mapping of (this.value as FieldMap[])) {
      obj[mapping.field] = mapping.mapping;
    }
    return obj;
  }
}

export class InputTemplateAddForm extends FormAdd<InputTemplateRequest, InputTemplateResponse> {

  constructor() {
    super({
      code: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      mappings: new InputTemplateMappingsAddForm()
    });
  }

  get code(): FormControl {
    return this.getControl('code');
  }
  get name(): FormControl {
    return this.getControl('name');
  }
  get type(): FormControl {
    return this.getControl('type');
  }
  get mappings(): InputTemplateMappingsAddForm {
    return this.get('mappings') as InputTemplateMappingsAddForm;
  }

  set fromModel(model: InputTemplateResponse) {
    const size = Object.keys(model.mappings).length - this.mappings.length;
    for (let i = 0; i < size; i++) {
      this.mappings.addItem();
    }

    this.patchValue({
      ...model,
      mappings: this.toFieldMapping(model.mappings)
    });
  }
  get toRequest(): InputTemplateRequest {
    return {
      code: this.code.value,
      name: this.name.value,
      type: this.type.value,
      mappings: this.mappings.toRequest
    } as InputTemplateRequest;
  }

  private toFieldMapping(mappings: Mapping): FieldMap[] {
    const map: FieldMap[] = [];

    console.log(mappings);

    for (let [key, value] of Object.entries(mappings)){
      map.push({
        field: key,
        mapping: value
      });
    }
    console.log(map);

    return map;
  }
}


