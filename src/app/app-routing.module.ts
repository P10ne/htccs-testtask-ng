import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './main/main-layout/main-layout.component';
import {MainComponent} from './main/pages/main/main.component';
import {AdminLayoutComponent} from './admin/admin-layout/admin-layout.component';
import {AdminComponent} from './admin/pages/admin/admin.component';
import {MovieInfoComponent} from './main/pages/movie-info/movie-info.component';


const routes: Routes = [
  {path: '', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
