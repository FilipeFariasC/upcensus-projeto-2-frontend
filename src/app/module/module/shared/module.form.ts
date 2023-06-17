import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormAdd, FormToFormData } from 'src/app/shared/form/form.model';
import { FileType } from '../../template/input/shared/input-template.model';
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
      metadata: new FormControl([]),
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
  get metadata(): FormControl {
    return this.getControl('metadata');
  }

  set fromModel(model: ModuleResponse) {
    this.patchValue({
      ...model,
      configuration: model.configuration.code,
      input_templates: model.input_templates.map(n=>n.code),
      output_template: model.output_template.code,
      metadata: model.metadata.map(n=>n.code)
    });
  }
  get toRequest(): ModuleRequest {
    return {
      code: this.code.value,
      name: this.name.value,
      tags: this.tags.value,
      input_templates: this.inputTemplates.value,
      output_template: this.outputTemplate.value,
      metadata: this.metadata.value
    } as ModuleRequest
  }

}


export class ModuleFileUploadForm extends FormGroup implements FormToFormData<FileUploadFormData> {

  constructor(){
    super({
      file: new FormControl([], Validators.required),
      fileType: new FormControl('', Validators.required),
      ignoreHeaderRow: new FormControl(false)
    });
  }

  get file(): FormControl {
    return this.get('file') as FormControl;
  }

  get fileType(): FormControl {
    return this.get('fileType') as FormControl;
  }

  get ignoreHeaderRow(): FormControl {
    return this.get('ignoreHeaderRow') as FormControl;
  }

  get formData(): FileUploadFormData {
    return new FileUploadFormData(
      this.file.value as File,
      this.fileType.value,
      this.ignoreHeaderRow.value
    );
  }

}

export class FileUploadFormData extends FormData {
  constructor(file: File, fileType: FileType | string, ignoreHeaderRow?: boolean) {
    super();
    this.append('file', file);
    this.append('fileType', String(fileType));
    this.append('ignoreHeaderRow', String(ignoreHeaderRow));
  }
}
