import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseListComponent } from 'src/app/shared/component/crud/base-list.component';
import { Columns } from 'src/app/shared/component/list/table/table.component';
import { ModuleResponse } from '../shared/module.model';

@Component({
  selector: 'app-module-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent extends BaseListComponent<ModuleResponse> {
  protected _dataSource = new MatTableDataSource<ModuleResponse>();

  readonly columns: Columns = [
    {
      key: "id",
      name: "Identificador",
      sortable: true
    },
    {
      key: "code",
      name: "Código"
    },
    {
      key: "configuration.code",
      name: "Configuração",
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
