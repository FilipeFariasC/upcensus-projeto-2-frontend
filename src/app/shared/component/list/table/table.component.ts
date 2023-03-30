import { Component, ChangeDetectionStrategy, Input, AfterViewInit, ChangeDetectorRef, Injector, inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export type ColumnType = 'text' | 'date' | 'timestamp' | 'time';

export interface Column {
  name: string;
  key: string;
  tooltip?: string;
  type?: ColumnType;
};

export type Columns = Array<Column> | Column[];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent<Model> implements AfterViewInit{

  public readonly cdr: ChangeDetectorRef;

  constructor(private injector: Injector) {
    this.cdr = injector.get(ChangeDetectorRef);
  }

  ngAfterViewInit(): void {
    console.table(this.dataSource.data);
    console.log(this.columnKeys);
    this.cdr.detectChanges();
  }

  @Input() dataSource!: MatTableDataSource<Model>;
  @Input() columns: Columns = [];


  get columnKeys(): string[] {
    return this.columns?.map(column => column.key);
  }
}
