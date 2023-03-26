import { FormGroup, FormControl } from '@angular/forms';


export interface FormToModel<Model> {
  get toModel(): Model;
}

export abstract class FormAdd<Request, Response> extends FormGroup implements FormToModel<Response> {
  getControl(key: string): FormControl {
    console.log(key);
    console.log(this);
    return this.get(key) as FormControl;
  }
  abstract fromModel (model: Response): void;
  abstract get toModel (): Response;
}
