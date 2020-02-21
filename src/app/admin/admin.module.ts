import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './pages/admin/admin.component';
import {RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';

const routes = [
  {path: '', component: AdminLayoutComponent, children: [
      {path: '', component: AdminComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AdminComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
