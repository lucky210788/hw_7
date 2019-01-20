import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ImagesComponent } from './components/images/images.component';
import { PostTilesComponent } from './components/post-tiles/post-tiles.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: '', redirectTo: 'graphics', pathMatch: 'full' },
  { path: 'graphics', component: DashboardComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'posts', component: PostTilesComponent },
  { path: 'table', component: TableComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
