import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './pages/admin/admin.component';
import {RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {SharedModule} from '../shared/shared.module';
import { MovieEditComponent } from './components/movie-edit/movie-edit.component';
import { MovieEditFormComponent } from './components/movie-edit-form/movie-edit-form.component';
import {AdminAuthGuard} from './guards/admin-auth.guard';
import { MoviesComponent } from './components/movies/movies.component';
import { UsersComponent } from './components/users/users.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserEditFormComponent } from './components/user-edit-form/user-edit-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { SearchPipe } from './pipes/search.pipe';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { LoginComponent } from './pages/login/login.component';

const routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {path: '', component: AdminComponent, canActivate: [AdminAuthGuard]},
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
    MoviesComponent,
    UsersComponent,
    UserEditComponent,
    UserEditFormComponent,
    SearchPipe,
    AdminHeaderComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CKEditorModule
  ],
  exports: [
    SearchPipe
  ],
  entryComponents: [
    MovieEditFormComponent,
    UserEditFormComponent
  ]
})
export class AdminModule { }
