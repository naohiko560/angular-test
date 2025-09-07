import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { Awzk1200Component } from './awzk1200.component';
import { Awzk1200aComponent } from './awzk1200a/awzk1200a.component';
import { Awzk1200bComponent } from './awzk1200b/awzk1200b.component';

const routes: Routes = [
  {
    path: '',
    component: Awzk1200Component,
    children: [
      { path: 'a', component: Awzk1200aComponent },
      { path: 'b', component: Awzk1200bComponent },
      { path: '', redirectTo: 'a', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Awzk1200Component,
    Awzk1200aComponent,
    Awzk1200bComponent,
  ],
})
export class Awzk1200Module {}
