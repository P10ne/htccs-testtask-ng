import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from '../admin/pages/admin/admin.component';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {MainComponent} from './pages/main/main.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

const routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', component: MainComponent}
    ]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
