import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';

import { ButtonModule } from 'primeng/button';


const components: Array<Type<any> | any[]> = [];
const directives: Array<Type<any> | any[]> = [];
const pipes: Array<Type<any> | any[]> = [];

const angularModules: Array<Type<any> | any[]> = [
  CommonModule,
  ReactiveFormsModule,
  RouterModule,
  FlexLayoutModule,
];

const materialModules : Array<Type<any> | any[]> = [
  MatSidenavModule,
  MatRadioModule,
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
