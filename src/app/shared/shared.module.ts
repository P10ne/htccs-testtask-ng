import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { InputComponent } from './components/input/input.component';
import {ModalComponent} from './components/modal/modal.component';
import { InsertionDirective } from './directives/insertion.directive';
import {LogoComponent} from './components/logo/logo.component';
import {TabComponent} from '../main/components/tab/tab.component';
import {TabsComponent} from '../main/components/tabs/tabs.component';
import {SearchComponent} from './components/search/search.component';
import {LoginFormComponent} from '../main/components/login-form/login-form.component';



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
    LoginFormComponent
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
    LoginFormComponent
  ],
  entryComponents: [ModalComponent, LoginFormComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
