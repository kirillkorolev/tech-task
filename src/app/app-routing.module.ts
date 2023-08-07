import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CATALOG, CORE } from './configs';

const routes: Routes = [
  {
    path: CORE,
    redirectTo: CATALOG,
    pathMatch: "full"
  },
  {
    path: CATALOG,
    loadChildren: () => import('./pages/index').then(p => p.CatalogPageModule),
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }