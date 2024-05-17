import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CurrencyService {
  token = "vSOBMXCnoDtJVkIFDGZakYlZsS8Njj2Z";
  headers = new Headers();
  requestOptions = {};

  constructor() {
    this.headers.append("apikey", this.token);
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: this.headers
    };
  }

  getCurrensy(source: string = "RUB", currencies: string = "RUB") {
    return fetch(`https://api.apilayer.com/currency_data/live?source=${source}&currencies=${currencies}`, this.requestOptions);
  }
}
