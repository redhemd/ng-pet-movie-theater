import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../client/common/auth.guard';
import { AdminAddPageComponent } from './admin-add-page/admin-add-page.component';
import { AdminDashboardPageComponent } from './admin-dashboard-page/admin-dashboard-page.component';
import { AdminEditPageComponent } from './admin-edit-page/admin-edit-page.component';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { AdminMainLayoutComponent } from './common/admin-main-layout/admin-main-layout.component';
import { MatDialogModule } from '@angular/material/dialog';
import { QuillModule } from 'ngx-quill';

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
    MatDialogModule,
    QuillModule.forRoot(),

    RouterModule.forChild([
      {
        path: '',
        component: AdminMainLayoutComponent,
        children: [
          { path: '', redirectTo: '/admin/login', pathMatch: 'full' },
          { path: 'login', component: AdminLoginPageComponent },
          {
            path: 'add',
            component: AdminAddPageComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'dashboard',
            component: AdminDashboardPageComponent,
            canActivate: [AuthGuard],
          },
          {
            path: 'movie/:id/edit',
            component: AdminEditPageComponent,
            canActivate: [AuthGuard],
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
  entryComponents: [AdminAddPageComponent],
})
export class AdminModule {}
