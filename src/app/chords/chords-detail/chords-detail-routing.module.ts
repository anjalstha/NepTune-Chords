import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChordsDetailPage } from './chords-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ChordsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChordsDetailPageRoutingModule {}
