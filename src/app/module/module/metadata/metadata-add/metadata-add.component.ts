import { Component } from '@angular/core';
import { BaseAddComponent } from 'src/app/shared/component';
import { MetadataAddForm } from '../shared/metadata.form';

@Component({
  selector: 'app-metadata-add',
  templateUrl: './metadata-add.component.html',
  styleUrls: ['./metadata-add.component.scss']
})
export class MetadataAddComponent extends BaseAddComponent<MetadataAddForm> {
  protected override _form = new MetadataAddForm();

  override get registerTitle(): string {
    return 'Cadastro de Metadado';
  }
  override get editTitle(): string {
    return 'Edição de Metadado';
  }
}
