import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutModule } from './about/about.module';

const routes: Routes = [{
  path: 'about/a',
  loadChildren: './about/about.module#AboutModule',
  canActivate: [],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
