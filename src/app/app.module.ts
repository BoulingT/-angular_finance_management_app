import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import {provideRouter} from "@angular/router";
import { MonthlyExpensesRecapComponent } from './monthly-expenses-recap/monthly-expenses-recap.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MonthlyExpensesRecapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [provideRouter((routes))],
  bootstrap: [AppComponent]
})
export class AppModule { }
