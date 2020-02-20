import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main/main-layout/main-layout.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { MainComponent } from './main/pages/main/main.component';
import {AdminComponent} from './admin/pages/admin/admin.component';
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

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    AdminLayoutComponent,
    MainComponent,
    AdminComponent,
    HeaderComponent,
    AuthComponent,
    FooterComponent,
    MovieItemComponent,
    TabComponent,
    TabsComponent,
    MovieInfoComponent,
    GenreItemComponent,
    ChannelItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
