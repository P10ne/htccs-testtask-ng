import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {MainComponent} from './pages/main/main.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {HeaderComponent} from './components/header/header.component';
import {AuthComponent} from './components/auth/auth.component';
import {FooterComponent} from './components/footer/footer.component';
import {MovieItemComponent} from './components/movie-item/movie-item.component';
import {MovieInfoComponent} from './pages/movie-info/movie-info.component';
import {GenreItemComponent} from './components/genre-item/genre-item.component';
import {ChannelItemComponent} from './components/channel-item/channel-item.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {AddCommentComponent} from './components/add-comment/add-comment.component';
import {CommentComponent} from './components/comment/comment.component';
import {SearchComponent} from '../shared/components/search/search.component';

const routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', component: MainComponent},
      {path: 'movie/:id', component: MovieInfoComponent}
    ]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    MainLayoutComponent,
    HeaderComponent,
    AuthComponent,
    FooterComponent,
    MovieItemComponent,
    MovieInfoComponent,
    GenreItemComponent,
    ChannelItemComponent,
    AddCommentComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class MainModule { }
