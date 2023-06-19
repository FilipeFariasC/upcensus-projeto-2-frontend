import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import AppRoute from 'src/app/approutes.enum';


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
};

export type Columns = Array<Column> | Column[];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<Model> implements AfterViewInit{

  public readonly cdr: ChangeDetectorRef;


  @ViewChild(MatSort, {static: false})
  set sort(value: MatSort) {
    this.dataSource.sort = value;
  }

  constructor(private injector: Injector) {
    this.cdr = injector.get(ChangeDetectorRef);
  }

  ngAfterViewInit(): void {
    console.table(this.dataSource.data);
    this.cdr.detectChanges();
  }

  @Input() dataSource!: MatTableDataSource<Model>;
  @Input() columns: Columns = [];

  viewRoute(id: number): string[] {
    return [AppRoute.VIEW.replace(':id', id.toString())];
  }
  editRoute(id: number): string[] {
    return [AppRoute.EDIT.replace(':id', id.toString())];
  }

  get columnKeys(): string[] {
    return this.columns?.map(column => column.key);
  }
}
