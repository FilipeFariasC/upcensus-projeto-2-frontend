import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseListComponent } from 'src/app/shared/component/crud/base-list.component';
import { Columns } from 'src/app/shared/component/list/table/table.component';
import { MetadataResponse } from '../shared/metadata.model';

@Component({
  selector: 'app-metadata-list',
  templateUrl: './metadata-list.component.html',
  styleUrls: ['./metadata-list.component.scss']
})
export class MetadataListComponent extends BaseListComponent<MetadataResponse> {
  protected _dataSource = new MatTableDataSource<MetadataResponse>();

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
      key: "value",
      name: "Valor",
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
