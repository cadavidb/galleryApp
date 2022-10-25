import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule

  ],
  exports: [
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ]
})
export class CoreAppModule { }
