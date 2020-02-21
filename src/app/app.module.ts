import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main/main-layout/main-layout.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { MainComponent } from './main/pages/main/main.component';
import {SharedModule} from './shared/shared.module';
import { HeaderComponent } from './main/components/header/header.component';
import { AuthComponent } from './main/components/auth/auth.component';
import { FooterComponent } from './main/components/footer/footer.component';
import { MovieItemComponent } from './main/components/movie-item/movie-item.component';
import { TabComponent } from './main/components/tab/tab.component';
import { TabsComponent } from './main/components/tabs/tabs.component';
import { MovieInfoComponent } from './main/pages/movie-info/movie-info.component';
import { GenreItemComponent } from './main/components/genre-item/genre-item.component';
import { ChannelItemComponent } from './main/components/channel-item/channel-item.component';
import {LoginFormComponent} from './main/components/login-form/login-form.component';
import { AddCommentComponent } from './main/components/add-comment/add-comment.component';
import { CommentComponent } from './main/components/comment/comment.component';
import {AdminComponent} from './admin/pages/admin/admin.component';
import {AdminModule} from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainComponent,
    HeaderComponent,
    AuthComponent,
    FooterComponent,
    MovieItemComponent,
    TabComponent,
    TabsComponent,
    MovieInfoComponent,
    GenreItemComponent,
    ChannelItemComponent,
    LoginFormComponent,
    AddCommentComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginFormComponent]
})
export class AppModule { }
