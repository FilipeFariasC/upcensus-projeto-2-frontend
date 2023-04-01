import { CdkTableModule } from "@angular/cdk/table";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Type } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  MatTooltipModule,
} from '@angular/material/tooltip';

import { ButtonModule } from 'primeng/button';
import { InputTextAreaComponent, InputTextComponent, TableComponent } from './component';
import { InputSelectComponent } from './component/form/input/select/select.component';
import { DurationPipe } from './pipes';
import { TableColumnValuePipe } from './pipes/table-column-value.pipe';


const components: Array<Type<any> | any[]> = [
  InputTextAreaComponent,
  InputTextComponent,
  InputSelectComponent,
  TableComponent
];
const directives: Array<Type<any> | any[]> = [];
const pipes: Array<Type<any> | any[]> = [
  DurationPipe,
  TableColumnValuePipe
];

const angularModules: Array<Type<any> | any[]> = [
  CommonModule,
  RouterModule,
  FlexLayoutModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  CdkTableModule
];

const materialModules : Array<Type<any> | any[]> = [
  MatSidenavModule,
  MatRadioModule,
  MatSelectModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTabsModule,
  MatExpansionModule
]

const primeNgModules: Array<Type<any> | any[]> = [
  ButtonModule
]


@NgModule({
  declarations: [
    components,
    directives,
    pipes
  ],
  imports: [
    angularModules,
    materialModules,
    primeNgModules
  ],
  exports: [
    components,
    angularModules,
    materialModules,
    primeNgModules,
    pipes,
  ],
  providers: [
    pipes
  ]
})
export class SharedModule { }
