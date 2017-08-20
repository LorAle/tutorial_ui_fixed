import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdIconModule, MdCardModule,
  MdToolbarModule, MdListModule, MdInputModule,
  MdTooltipModule, MdTabsModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CovalentDataTableModule, CovalentCommonModule } from '@covalent/core';

const MD_MODULES = [
  MdButtonModule, MdIconModule, MdCardModule,
  MdToolbarModule, MdListModule, MdInputModule,
  MdTooltipModule, MdTabsModule];
const TD_MODULES = [CovalentDataTableModule, CovalentCommonModule];

@NgModule({
  exports: [
    MD_MODULES,
    TD_MODULES,
    FlexLayoutModule,
    CommonModule
  ]
})
export class SharedModule { }
