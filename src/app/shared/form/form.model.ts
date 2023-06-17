import { FormGroup, FormControl, FormArray } from '@angular/forms';

export interface ModelToRequest<Response> {
  set fromModel(model: Response);
}

export interface FormToRequest<Request> {
  get toRequest(): Request;
}
export interface FormToFormData<FormDataType extends FormData> {
  get formData(): FormDataType;
}

export abstract class FormAdd<Request, Response> extends FormGroup implements ModelToRequest<Response>,FormToRequest<Request> {
  getControl(key: string): FormControl {
    return this.get(key) as FormControl;
  }
  getArray(key: string): FormArray {
    return this.get(key) as FormArray;
  }
  abstract set fromModel (model: Response);
  abstract get toRequest (): Request;
}
