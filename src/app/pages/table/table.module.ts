import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { ComponentsModule } from 'src/app/components/component.module';

@NgModule({
  declarations: [
    TableComponent,

  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    ComponentsModule
  ]
})
export class TableModule { }
