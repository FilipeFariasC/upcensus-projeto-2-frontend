import { FormControl, Validators } from '@angular/forms';
import { FormAdd } from 'src/app/shared/form/form.model';
import { ConfigurationFieldRequest } from '../configuration-field/shared/configuration-field.model';
import { ConfigurationRequest, ConfigurationResponse, configurationResponseToRequest } from './configuration.model';

export class ConfigurationAddForm extends FormAdd<ConfigurationRequest, ConfigurationResponse> {

  private _original: ConfigurationResponse | undefined;
  constructor() {
    super({
      code: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      identifierField: new FormControl(''),
      fields: new FormControl([])
    });
  }

  get code(): FormControl {
    return this.getControl('code');
  }
  get name(): FormControl {
    return this.getControl('name');
  }
  get identifierField(): FormControl {
    return this.getControl('identifierField');
  }

  get fields(): FormControl {
    return this.getControl('fields');
  }

  set fromModel(model: ConfigurationResponse) {
    this._original = model;

    const val = configurationResponseToRequest(model);
    this.patchValue({
      ...val,
      fields: val.fields.map(f=>f.fieldCode)
    });
  }
  get toRequest(): ConfigurationRequest {
    return {
      code: this.code.value,
      name: this.name.value,
      identifierField: this.identifierField.value,
      fields: this.mapFields()
    } as ConfigurationRequest;
  }

  private get original(): ConfigurationResponse | undefined {
    return this._original;
  }

  private mapFields(): ConfigurationFieldRequest[] {
    return (this.fields.value as any[])
      .map(n=>{
        if (this.original) {
          const field = this.original
            .fields
            .filter(f=> f.field === n)[0];
          if (field)
            return {
              fieldCode: field
            };
        }
        return {
          fieldCode: n
        };
      });
  }
}


