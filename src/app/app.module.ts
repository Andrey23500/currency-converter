import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';


@NgModule({
  imports: [BrowserModule, CurrencyComponent],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
