import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseListComponent } from 'src/app/shared/component/crud/base-list.component';
import { Columns } from 'src/app/shared/component/list/table/table.component';
import { InputTemplateResponse } from '../shared/input-template.model';

@Component({
  selector: 'app-input-template-list',
  templateUrl: './input-template-list.component.html',
  styleUrls: ['./input-template-list.component.scss']
})
export class InputTemplateListComponent extends BaseListComponent<InputTemplateResponse> {
  protected _dataSource = new MatTableDataSource<InputTemplateResponse>();

  readonly columns: Columns = [
    {
      key: "id",
      name: "Id",
      sortable: true
    },
    {
      key: "code",
      name: "Código",
    },
    {
      key: "name",
      name: "Nome",
      type: "text"
    },
    {
      key: "creation_time",
      name: "Data de cadastro",
      type: "timestamp"
    },
    {
      key: "interactions",
      name: "Operações",
      type: 'interactive',
      interactions: ['view', 'remove', 'edit']
    }
  ]
}
