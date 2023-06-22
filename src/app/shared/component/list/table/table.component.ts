import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Injector, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import AppRoute from 'src/app/approutes.enum';
import { Pagination } from 'src/app/shared/interfaces/pageable';


export type Interactions = 'view' | 'edit' | 'remove';

export type ColumnType = 'text' | 'date' | 'timestamp' | 'time' | 'interactive';

export interface Column {
  name: string;
  key: string;
  tooltip?: string;
  type?: ColumnType;
  sortable?: boolean;
  interactions?: Array<Interactions>;
  translate?: Map<any, any>;
  customRoute?: string;
};

export type Columns = Array<Column> | Column[];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<Model> implements AfterViewInit{

  @ViewChild(MatPaginator)
  private _paginator!: MatPaginator;

  @Input() pagination!: Pagination;
  @Input() dataSource!: MatTableDataSource<Model>;
  @Input() columns: Columns = [];

  @Output() page: EventEmitter<void> = new EventEmitter();

  public readonly cdr: ChangeDetectorRef;


  get columnKeys(): string[] {
    return this.columns?.map(column => column.key);
  }

  get paginator(): MatPaginator {
    return this._paginator;
  }

  @ViewChild(MatSort, {static: false})
  set sort(value: MatSort) {
    this.dataSource.sort = value;
  }

  constructor(private injector: Injector) {
    this.cdr = injector.get(ChangeDetectorRef);
  }

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
  routeLink(route: string, id: number): string[] {
    return this.getIdRoute(route, id);
  }

  viewRoute(column: Column, id: number): string[] {
    return this.checkCustomRoute(column)? this.routeLink(column.customRoute!, id) : this.getIdRoute(AppRoute.VIEW, id);
  }
  editRoute(column: Column, id: number): string[] {
    return this.checkCustomRoute(column)? this.routeLink(column.customRoute!, id) : this.getIdRoute(AppRoute.EDIT, id);
  }

  private getIdRoute(route: string, id: number): string[]  {
    return [route.replace(":id", id.toString())]
  }

  private checkCustomRoute(column: Column): boolean {
    return (column?.customRoute?.length ?? 0 ) > 0;
  }
}
