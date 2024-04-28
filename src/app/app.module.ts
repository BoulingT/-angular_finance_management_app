import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule, routes} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {provideRouter} from "@angular/router";
import {
  MonthlyExpensesRecapComponent
} from './components/expense/monthly-expenses-recap/monthly-expenses-recap.component';
import {HttpClientModule} from "@angular/common/http";
import {InvestmentRecapComponent} from './components/investment/investment-recap/investment-recap.component';
import {ManageRessourcesComponent} from './pages/manage-ressources/manage-ressources.component';
import {InfoCardComponent} from './components/info-amount-card/info-card.component';
import {RepartitionDiagramComponent} from './components/graphs/repartition-diagram/repartition-diagram.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MonthlyExpensesRecapComponent,
    InvestmentRecapComponent,
    ManageRessourcesComponent,
    InfoCardComponent,
    RepartitionDiagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [provideRouter((routes))],
  bootstrap: [AppComponent]
})
export class AppModule {
}
