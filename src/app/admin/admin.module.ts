import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminAddPageComponent } from './admin-add-page/admin-add-page.component';
import { AdminDashboardPageComponent } from './admin-dashboard-page/admin-dashboard-page.component';
import { AdminEditPageComponent } from './admin-edit-page/admin-edit-page.component';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { AdminMainLayoutComponent } from './common/admin-main-layout/admin-main-layout.component';

@NgModule({
  declarations: [
    AdminMainLayoutComponent,
    AdminLoginPageComponent,
    AdminAddPageComponent,
    AdminDashboardPageComponent,
    AdminEditPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forChild([
      {
        path: '',
        component: AdminMainLayoutComponent,
        children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: AdminLoginPageComponent },
          { path: 'add', component: AdminAddPageComponent },
          { path: 'dashboard', component: AdminDashboardPageComponent },
          { path: 'movie/:id/edit', component: AdminEditPageComponent },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AdminModule {}
