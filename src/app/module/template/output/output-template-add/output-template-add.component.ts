import { Component } from '@angular/core';
import { BaseAddComponent } from 'src/app/shared/component';
import { OutputTemplateAddForm } from '../shared/output-template.form';

@Component({
  selector: 'app-output-template-add',
  templateUrl: './output-template-add.component.html',
  styleUrls: ['./output-template-add.component.scss']
})
export class OutputTemplateAddComponent extends BaseAddComponent<OutputTemplateAddForm> {
  protected override _form = new OutputTemplateAddForm();

  override get registerTitle(): string {
    return 'Cadastro de Modelo de Saída';
  }
  override get editTitle(): string {
    return 'Edição de Modelo de Saída';
  }
}
