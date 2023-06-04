import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseListComponent } from 'src/app/shared/component/crud/base-list.component';
import { Columns } from 'src/app/shared/component/list/table/table.component';
import { FieldResponse } from '../shared/field.model';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent extends BaseListComponent<FieldResponse> {
  protected _dataSource = new MatTableDataSource<FieldResponse>();

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
