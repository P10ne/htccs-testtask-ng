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
import { MoviesComponent } from './pages/movies/movies.component';
import { UsersComponent } from './pages/users/users.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserEditFormComponent } from './components/user-edit-form/user-edit-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';

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
    LoginComponent,
    MoviesComponent,
    UsersComponent,
    UserEditComponent,
    UserEditFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CKEditorModule
  ],
  entryComponents: [
    MovieEditFormComponent,
    UserEditFormComponent
  ]
})
export class AdminModule { }
