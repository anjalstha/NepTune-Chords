import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'chords',
    loadChildren: () => import('./chords/chords.module').then( m => m.ChordsPageModule)
  },
  {
    path: 'chords/:id',
    loadChildren: () => import('./chords/chords-detail/chords-detail.module').then( m => m.ChordsDetailPageModule)
  },
  {
    path: 'artists',
    loadChildren: () => import('./artists/artists.module').then( m => m.ArtistsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
