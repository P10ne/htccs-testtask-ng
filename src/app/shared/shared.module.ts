import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { InputComponent } from './components/input/input.component';
import {ModalComponent} from './components/modal/modal.component';
import { InsertionDirective } from './directives/insertion/insertion.directive';
import {LogoComponent} from './components/logo/logo.component';
import {TabComponent} from '../main/components/tab/tab.component';
import {TabsComponent} from '../main/components/tabs/tabs.component';
import {SearchComponent} from './components/search/search.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import {AuthInterceptor} from './services/auth-interceptor/auth-interceptor.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    BtnComponent,
    CheckboxComponent,
    InputComponent,
    ModalComponent,
    InsertionDirective,
    LogoComponent,
    TabComponent,
    TabsComponent,
    SearchComponent,
    LoginFormComponent,
    PreloaderComponent,
    FileInputComponent
  ],
  exports: [
    BtnComponent,
    CheckboxComponent,
    InputComponent,
    ModalComponent,
    LogoComponent,
    TabComponent,
    TabsComponent,
    SearchComponent,
    LoginFormComponent,
    PerfectScrollbarModule,
    PreloaderComponent,
    FileInputComponent
  ],
  entryComponents: [
    ModalComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }
