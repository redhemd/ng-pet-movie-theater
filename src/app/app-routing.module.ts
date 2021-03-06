import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientMainPageComponent } from './client/client-main-page/client-main-page.component';
import { ClientMoviePageComponent } from './client/client-movie-page/client-movie-page.component';
import { ClientMainLayoutComponent } from './client/common/client-main-layout/client-main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ClientMainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: ClientMainPageComponent },
      { path: 'movie/:id', component: ClientMoviePageComponent },
    ],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((module) => module.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
