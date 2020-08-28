import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V1Component } from './v1/v1.component';
import { V2Component } from './v2/v2.component';

const routes: Routes = [
  { path: 'v1', component: V1Component },
  { path: 'v2', component: V2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
