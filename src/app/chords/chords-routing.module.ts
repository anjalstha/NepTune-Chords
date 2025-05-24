import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChordsPage } from './chords.page';
import { ChordsDetailPage } from '../chords/chords-detail/chords-detail.page'; // Import your detail page


const routes: Routes = [
  {
    path: '',
    component: ChordsPage
  },
  {
    path: ':title',
    loadChildren: () => import('./chords-detail/chords-detail.module').then( m => m.ChordsDetailPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChordsPageRoutingModule {}
