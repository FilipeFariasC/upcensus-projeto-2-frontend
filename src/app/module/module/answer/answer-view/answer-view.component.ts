import { ChangeDetectorRef, Component, Injector, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import AppRoute from 'src/app/approutes.enum';
import UrlParams from 'src/app/shared/component/crud/base-list.component';
import { Columns, TableComponent } from 'src/app/shared/component/list/table/table.component';
import { AnswerErrorResponse, AnswerMinResponse, AnswerResponse, RecordResponse } from '../../shared/module.model';
import { ModuleService } from '../../shared/module.service';

@Component({
  selector: 'app-answer-view',
  templateUrl: './answer-view.component.html',
  styleUrls: ['./answer-view.component.scss']
})
export class AnswerViewComponent implements OnInit {

  @ViewChild(TableComponent)
  protected table!: TableComponent<AnswerMinResponse>;

  readonly columnsRecords: Columns = [
    {
      key: "id",
      name: "Id",
      sortable: true
    },
    {
      key: "field.code",
      name: "Código do campo",
    },
    {
      key: "value",
      name: "Valor",
      sortable: true
    },
    {
      key: "has_errors ? 'Sim' : 'Não'",
      name: "Inconsistente",
    },
    {
      key: "interactions",
      name: "Operações",
      type: 'interactive',
      interactions: ['view'],
      customRoute: '../:id'
    }
  ]
  readonly columnsErrors: Columns = [
    {
      key: "id",
      name: "Id"
    },
    {
      key: "motive",
      name: "motivo",
    },
    {
      key: "description",
      name: "Descrição"
    }
  ]


  private _records: RecordResponse[] = [];
  protected _dataSourceRecords = new MatTableDataSource<AnswerMinResponse>();
  protected _dataSourceErrors = new MatTableDataSource<AnswerErrorResponse>();

  private readonly activatedRoute: ActivatedRoute;
  private readonly cdr: ChangeDetectorRef;
  private readonly service: ModuleService;
  private readonly router: Router;
  private _model!: AnswerResponse;

  constructor(protected injector: Injector) {
    this.activatedRoute = injector.get(ActivatedRoute);
    this.cdr = injector.get(ChangeDetectorRef);
    this.service = injector.get(ModuleService);
    this.router = injector.get(Router);
  }

  get idModule(): number {
    const url = (this.router.url).split('/')[3];
    return parseInt(url, 10);
  }

  get idAnswer(): number {
    return this.activatedRoute.snapshot.params['idAnswer'];
  }

  get model(): AnswerResponse {
    return this._model;
  }

  get dataSourceRecords(): MatTableDataSource<AnswerMinResponse> {
    return this._dataSourceRecords;
  }
  get dataSourceErrors(): MatTableDataSource<AnswerErrorResponse> {
    return this._dataSourceErrors;
  }

  get records(): RecordResponse[] {
    return this._records;
  }

  get hasAnswers(): boolean {
    return Object.keys(this.records).length > 0;
  }

  get urlParams(): UrlParams {
    return this.activatedRoute.snapshot.queryParams;
  }


  get paginator(): MatPaginator {
    return this.table?.paginator;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.display()
    )
  }


  fieldViewRoute(idField: number): string[] {
    return [this.buildUrl(true, AppRoute.FIELD_ABSOLUTE, ""+idField)];
  }

  answerViewRoute(idAnswer: number): string[] {
    return [this.buildUrl(true, AppRoute.ANSWERS_ABSOLUTE, ""+idAnswer)];
  }

  display(): void {
    (this.service as ModuleService).getAnswer(this.idModule, this.idAnswer)
      .pipe(
        finalize(()=>{
          this.cdr.detectChanges();
          if (this.table)
            this.table.cdr.detectChanges();
        }),
        catchError(()=>{
          this.navigateBackToList();
          return of();
        })
      )
      .subscribe((response)=>{
        const data = response.data;
        if (!data) {
          this.router.navigate(['../'], { relativeTo: this.activatedRoute.parent});
        }
        this._model = data;
        this._dataSourceRecords.data = data.identifies?.filter(n=>n.id != data.id);
        this._dataSourceErrors.data = data.errors;
      });
  }


  protected fetchData() {
    this.display();
  }

  protected buildUrl(root?: boolean, ...params: string[]): string {
    return `${root ? '/' : ''}${params.join('/')}`;
  }

  private navigateBackToList(): void {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
}
