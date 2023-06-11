import { Component, Injector } from '@angular/core';
import { BaseViewComponent } from 'src/app/shared/component';
import AppRoute from '../../../approutes.enum';
import { ModuleResponse } from '../shared/module.model';
import { MatDialog } from '@angular/material/dialog';
import { ModuleUploadFileDialogComponent } from '../module-upload-file-dialog/module-upload-file-dialog.component';
import { ModuleService } from '../shared/module.service';

@Component({
  selector: 'app-module-module-view',
  templateUrl: './module-view.component.html',
  styleUrls: ['./module-view.component.scss']
})
export class ModuleViewComponent extends BaseViewComponent<ModuleResponse> {

  constructor(
    injector: Injector,
    private _dialog: MatDialog
  ) {
    super(injector);
  }

  get answerRoute(): string[] {
    return [AppRoute.ANSWERS_SUFFIX];
  }

  get hasFileInputTemplates(): boolean {
    return (this
      .model
      .file_input_template_types.length ?? 0) > 0;
  }

  get dialog(): MatDialog {
    return this._dialog;
  }

  openModal(): void {
    const dialogRef = this.dialog.open(ModuleUploadFileDialogComponent, {
      data: this.model
    });
    dialogRef.afterClosed()
      .subscribe(()=>this.cdr.detectChanges());
  }

  migrate(): void {
    (this.service as ModuleService)
      .migrate(this.id)
      .subscribe(response => alert('migrado com sucesso'));
  }
}
