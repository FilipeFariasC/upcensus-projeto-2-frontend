import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BaseListComponent } from 'src/app/shared/component/crud/base-list.component';
import { Columns } from 'src/app/shared/component/list/table/table.component';
import { OutputTemplateResponse } from '../shared/output-template.model';

@Component({
  selector: 'app-output-template-list',
  templateUrl: './output-template-list.component.html',
  styleUrls: ['./output-template-list.component.scss']
})
export class OutputTemplateListComponent extends BaseListComponent<OutputTemplateResponse> {
  protected _dataSource = new MatTableDataSource<OutputTemplateResponse>();

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
