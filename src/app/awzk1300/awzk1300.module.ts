import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Awzk1300Component } from './awzk1300.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: Awzk1300Component }
    ]),
    Awzk1300Component
  ]
})
export class Awzk1300Module {}
