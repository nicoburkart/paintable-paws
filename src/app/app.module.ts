import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './modules/home/home.module';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
