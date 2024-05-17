import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { CurrencyService } from "../service/currency.service";
import { MatSlideToggleModule } from '@angular/material/slide-toggle'

@Component({
  selector: "app-currency",
  templateUrl: "./currency.component.html",
  styleUrl: "./currency.component.css",
  standalone: true,
  imports: [MatSlideToggleModule]
})
export class CurrencyComponent implements OnInit {

  currencies: any;
  constructor(private changeDetector: ChangeDetectorRef, public service: CurrencyService) {

  }

  ngOnInit(): void {

    this.currencies = this.service.getCurrensy();
    console.log(this.currencies);

  }


}
