import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseListComponent } from 'src/app/shared/component/crud/base-list.component';
import { Columns } from 'src/app/shared/component/list/table/table.component';
import { ConfigurationResponse } from '../shared/configuration.model';

@Component({
  selector: 'app-configuration-list',
  templateUrl: './configuration-list.component.html',
  styleUrls: ['./configuration-list.component.scss']
})
export class ConfigurationListComponent extends BaseListComponent<ConfigurationResponse> {
  protected _dataSource = new MatTableDataSource<ConfigurationResponse>();

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
