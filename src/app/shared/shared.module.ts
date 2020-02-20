import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { InputComponent } from './components/input/input.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    BtnComponent,
    CheckboxComponent,
    InputComponent,
    LogoComponent,
    SearchComponent
  ],
  exports: [
    BtnComponent,
    CheckboxComponent,
    InputComponent,
    LogoComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
