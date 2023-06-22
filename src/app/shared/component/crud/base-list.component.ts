import { AfterViewInit, ChangeDetectorRef, Directive, Injector, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { BaseCrudService } from '../../service/base.service';
import { TableComponent } from '../list';
import AppRoute from 'src/app/approutes.enum';
import { Pageable, Pagination } from '../../interfaces/pageable';
import { MatPaginator } from '@angular/material/paginator';

export default interface UrlParams {
  [key: string]: any;
}

@Directive()
export abstract class BaseListComponent<Model> implements OnInit, AfterViewInit {

  @ViewChild(TableComponent)
  protected table!: TableComponent<Model>;

  protected readonly activatedRoute: ActivatedRoute;
  protected readonly cdr: ChangeDetectorRef;
  protected readonly service: BaseCrudService<any,any>;
  protected readonly router: Router;
  protected abstract _dataSource: MatTableDataSource<Model> ;

  protected _totalElements = 0;
  protected _defaultPageSize = 10;
  protected _defaultPageSizeOptions = [10, 25, 50];

  constructor(protected injector: Injector) {
    this.activatedRoute = injector.get(ActivatedRoute);
    this.cdr = injector.get(ChangeDetectorRef);
    this.service = injector.get(BaseCrudService);
    this.router = injector.get(Router);
  }

  get dataSource(): MatTableDataSource<Model> {
    return this._dataSource;
  }

  get urlParams(): UrlParams {
    return this.activatedRoute.snapshot.queryParams;
  }

  get pagination(): Pagination {
    return {
      length: this._totalElements,
      size: this.pageRequest.size,
      index: this.pageRequest.page,
      sizeOptions: this._defaultPageSizeOptions
    };
  }

  ngOnInit(): void {
    this.fetchData();
    this.display();
  }
  ngAfterViewInit(): void {
  }

  getPaginator(): MatPaginator {
    return this.table?.paginator;
  }

  get pageRequest(): Pageable {
    const paginator = this.getPaginator();

    return {
      page: (paginator?.pageIndex || (parseInt(this.urlParams['page'], 10) || 1) - 1),
      size: paginator?.pageSize || (parseInt(this.urlParams['size'], 10) || this._defaultPageSize),
    };
  }

  get registerRoute(): string[] {
    return [AppRoute.REGISTER];
  }
  protected fetchEager(): void { }

  protected fetchData(): void { }

  protected fetchLazy(): void { }

  display(): void {

    this.service.findAll(this.pageRequest)
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
        this._dataSource.data = data.content;
        this._totalElements = data.totalElements;
      });
  }
}
