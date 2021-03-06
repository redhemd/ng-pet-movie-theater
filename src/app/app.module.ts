import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientMainLayoutComponent } from './client/common/client-main-layout/client-main-layout.component';
import { ClientMainPageComponent } from './client/client-main-page/client-main-page.component';
import { ClientMovieComponent } from './client/client-movie/client-movie.component';
import { ClientMoviePageComponent } from './client/client-movie-page/client-movie-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientMainLayoutComponent,
    ClientMainPageComponent,
    ClientMovieComponent,
    ClientMoviePageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
