import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './pages/admin/admin.component';
import {RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {SharedModule} from '../shared/shared.module';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { MovieEditFormComponent } from './components/movie-edit-form/movie-edit-form.component';
import { LoginComponent } from './pages/login/login.component';
import {AuthGuard} from './guards/auth.guard';

const routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {path: '', component: AdminComponent},
      {path: 'login', component: LoginComponent}
    ],
  }
];

@NgModule({
  declarations: [
    AdminComponent,
    AdminLayoutComponent,
    MovieEditComponent,
    MovieEditFormComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [MovieEditFormComponent]
})
export class AdminModule { }
