import { FileType } from './../../template/input/shared/input-template.model';
import { ChangeDetectorRef, Component, Inject, Injector, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ModuleResponse } from "../shared/module.model";
import { ModuleFileUploadForm } from "../shared/module.form";
import { BooleanOptions, EnumOption, EnumOptions, booleanEnumOptions } from '../../../shared/interfaces/enum-option';
import { ModuleService } from '../shared/module.service';
import { share, shareReplay } from 'rxjs';



@Component({
  selector: 'app-module-module-upload-file-dialog',
  templateUrl: './module-upload-file-dialog.component.html'
})
export class ModuleUploadFileDialogComponent implements OnInit {

  private _form = new ModuleFileUploadForm();
  private _service: ModuleService;

  private _fileTypeOptions: EnumOptions<FileType> = [];
  private _tabularFileTypes: string[] = [];
  private _fileTypesAccept= new Map<FileType, string>([]);
  private _fileTypeAccept = '';

  private _fileTypeIsTabularData = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly data: ModuleResponse,
    private dialogRef: MatDialogRef<ModuleUploadFileDialogComponent>,
    private readonly cdr: ChangeDetectorRef,
    private injector: Injector
  ) {
    this._service = injector.get(ModuleService);
  }

  get form(): ModuleFileUploadForm {
    return this._form;
  }

  get fileTypeAccept(): string {
    return this._fileTypeAccept;
  }

  get fileTypeOptions(): EnumOptions<FileType> {
    return this._fileTypeOptions;
  }
  get ignoreHeaderRowOptions(): BooleanOptions {
    return booleanEnumOptions;
  }

  get fileTypeIsTabularData(): boolean {
    return this._fileTypeIsTabularData;
  }

  ngOnInit(): void {
    this._tabularFileTypes = this.data
      .file_input_template_types
      .filter(n=>n.tabular_data)
      .map(n=>n.file_type);
    this.data
      .file_input_template_types
      .forEach(n=>this._fileTypesAccept.set(n.file_type, `${n.extension},${n.mime_type}`));

    this._fileTypeOptions = this.data
      .file_input_template_types
      .map(n=>({
        label: n.name,
        value: n.file_type
      }));

    this.form.fileType.valueChanges.subscribe((val)=>{
      this._fileTypeIsTabularData = this._tabularFileTypes.includes(val);
      this._fileTypeAccept = this._fileTypesAccept.get(val) ?? '';
    });
  }

  selectFile(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.file.setValue(file);
      this.form.updateValueAndValidity();
    }
    this.cdr.detectChanges();
  }
  upload(): void {
    this._service
      .uploadFile(this.data.id, this.form.formData)
      .subscribe(response=>{
        this.dialogRef.close();
      })
  }
}

