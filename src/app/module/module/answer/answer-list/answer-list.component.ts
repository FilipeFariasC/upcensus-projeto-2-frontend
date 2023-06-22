import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { finalize } from 'rxjs';
import AppRoute from 'src/app/approutes.enum';
import { BaseViewComponent } from 'src/app/shared/component';
import UrlParams from 'src/app/shared/component/crud/base-list.component';
import { Columns, TableComponent } from 'src/app/shared/component/list/table/table.component';
import { Pageable, Pagination } from 'src/app/shared/interfaces/pageable';
import { ModuleResponse, RecordMinResponse, RecordResponse } from '../../shared/module.model';
import { ModuleService } from '../../shared/module.service';

@Component({
  selector: 'app-answer-list',
  templateUrl: './answer-list.component.html',
  styleUrls: ['./answer-list.component.scss']
})
export class AnswerListComponent extends BaseViewComponent<ModuleResponse> {

  @ViewChild(TableComponent)
  protected table!: TableComponent<RecordResponse>;

  readonly columns: Columns = [
    {
      key: "identifier.id",
      name: "Id",
      sortable: true
    },
    {
      key: "identifier.value",
      name: "Identificador",
      sortable: true
    },
    {
      key: "entries.length",
      name: "Quantidade de respostas",
    },
    {
      key: "identifier.has_errors",
      name: "Tem inconsistências",
    },
    {
      key: "identifier.creation_time",
      name: "Data de Cadastro",
    },
    {
      key: "interactions",
      name: "Operações",
      type: 'interactive',
      interactions: ['view']
    }
  ]

  protected _totalElements = 0;
  protected _defaultPageSize = 10;
  protected _defaultPageSizeOptions = [10, 25, 50];


  private _records: RecordMinResponse[] = [];
  protected _dataSource = new MatTableDataSource<RecordMinResponse>();

  get records(): RecordMinResponse[] {
    return this._records;
  }

  get hasAnswers(): boolean {
    return Object.keys(this.records).length > 0;
  }

  get pagination(): Pagination {
    return {
      length: this._totalElements,
      size: this.pageRequest.size,
      index: this.pageRequest.page,
      sizeOptions: this._defaultPageSizeOptions
    };
  }


  get pageRequest(): Pageable {
    const paginator = this.paginator;

    return {
      page: paginator?.pageIndex ?? (parseInt(this.urlParams['page'], 10) - 1) ?? 0,
      size: paginator?.pageSize ?? (parseInt(this.urlParams['size'], 10)) ?? this._defaultPageSize,
    };
  }

  get urlParams(): UrlParams {
    return this.activatedRoute.snapshot.queryParams;
  }

  fieldViewRoute(idField: number): string[] {
    return [this.buildUrl(true, AppRoute.FIELD_ABSOLUTE, ""+idField)];
  }

  answerViewRoute(idAnswer: number): string[] {
    return [this.buildUrl(true, AppRoute.ANSWERS_ABSOLUTE, ""+idAnswer)];
  }


  get dataSource(): MatTableDataSource<RecordMinResponse> {
    return this._dataSource;
  }

  protected override fetchData() {
    this.display();
  }


  get paginator(): MatPaginator {
    return this.table?.paginator;
  }

  display(): void {

    (this.service as ModuleService).getRecords(this.id, this.pageRequest)
      .pipe(
        finalize(()=>{
          this.router.navigate([], {
            queryParams: {
              page: this.pageRequest.page + 1,
              size: this.pageRequest.size
            }
          })
          this.cdr.detectChanges();
          this.table.cdr.detectChanges();
        })
      )
      .subscribe((response)=>{
        const data = response.data;
        if (data.content?.length || 0) {
          this.router.navigate(['../'], { relativeTo: this.activatedRoute.parent});
        }
        this._dataSource.data = data.content;
        this._totalElements = data.totalElements;
        this.cdr.detectChanges();
        this.table.cdr.detectChanges();
      });
  }
}
