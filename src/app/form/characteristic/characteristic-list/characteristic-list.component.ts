import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseListComponent } from 'src/app/shared/component/crud/base-list.component';
import { Columns } from 'src/app/shared/component/list/table/table.component';
import { CharacteristicResponse } from './../shared/characteristic.model';

@Component({
  selector: 'app-characteristic-list',
  templateUrl: './characteristic-list.component.html',
  styleUrls: ['./characteristic-list.component.scss']
})
export class CharacteristicListComponent extends BaseListComponent<CharacteristicResponse> {
  protected _dataSource = new MatTableDataSource<CharacteristicResponse>();

  readonly columns: Columns = [
    {
      key: "id",
      name: "Identificador",
      sortable: true
    },
    {
      key: "attribute",
      name: "Atributo",
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
