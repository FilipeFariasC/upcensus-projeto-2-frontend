import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseListComponent } from 'src/app/shared/component/crud/base-list.component';
import { Columns, TableComponent } from 'src/app/shared/component/list/table/table.component';
import { CharacteristicService } from '../shared/characteristic.service';
import { Attribute, CharacteristicResponse } from './../shared/characteristic.model';

@Component({
  selector: 'app-characteristic-list',
  templateUrl: './characteristic-list.component.html',
  styleUrls: ['./characteristic-list.component.scss']
})
export class CharacteristicListComponent extends BaseListComponent<CharacteristicResponse> {
  protected _dataSource = new MatTableDataSource<CharacteristicResponse>();
  private _attributeMapper = new Map<Attribute, String>();

  readonly columns: Columns = [
    {
      key: "id",
      name: "Identificador",
      sortable: true
    },
    {
      key: "attribute",
      name: "Atributo",
      translate: this.attributeMapper
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

  get attributeMapper(): Map<Attribute, String> {
    return this._attributeMapper;
  }

  protected override fetchData(): void {
    (this.service as CharacteristicService)
      .attributeOptions()
      .subscribe(response=>{
        response.data.forEach(attr => this._attributeMapper.set(attr.value, attr.label));
      });
  }
}
