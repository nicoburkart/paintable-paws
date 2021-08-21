import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './modules/home/home.module';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { CoreModule } from './core/core.module';
import { OrderPageComponent } from './modules/order/order-page/order-page.component';
import { OrderModule } from './modules/order/order.module';

@NgModule({
  declarations: [AppComponent, HomePageComponent, OrderPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    OrderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
