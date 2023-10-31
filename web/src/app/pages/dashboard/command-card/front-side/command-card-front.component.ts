import { AfterViewInit, Component, Input } from "@angular/core";
import { FinnhubSymbol, ISymbol } from "@common/models/finnace/symbol";

import { FinanceService } from "src/app/@core/api/finance.service";

class TradeCommand implements ISymbol {
    id?: number;
    symbol?: string;
    close?: number; // close price
    high?: number; // highest price
    low?: number; // lowest price
    open?: number = 0; // open
    previousClose?: number; // change percentage 
    dayPercent?: number = 0; // day percent change
    time?: Date; // timestamp
    resolution?: string; // 1, 5, 30, 60, D, M, Y
    createAt?: Date;

    estimate: number = 0;
    shares: number = 0;
    estimateLimit: number = 0;
    init(symbol: ISymbol) {
        Object.assign(this, symbol)
    }
    updateEstimate(total: number) {
        if (this.close) {
            this.shares = Math.floor(total / this.close)
            this.estimate = this.shares * this.close;
            this.estimateLimit = 1.2 * this.estimate
        }
    }

}

@Component({
    selector: 'ait-command-front-card',
    templateUrl: './command-card-front.component.html',
    styleUrls: ['./command-card-front.component.scss']
})
export class CommandCardFrontComponent implements AfterViewInit {

    @Input() selectedCurrency: number = 500;
    symbol: TradeCommand = new TradeCommand();
    dayPercent = 0;
    price = 0;
    @Input()
    selectedSymbol = 'SOXL';
    currencies: number[] = [500, 1000, 3000];


    constructor(private readonly api: FinanceService) {

    }

    ngAfterViewInit(): void {
        this.getSymbol();
    }





    getSymbol() {
        this.api.getSymbol(this.selectedSymbol).subscribe((data) => {
            this.dayPercent = data.dayPercent || 0;
            this.symbol.init(data)
            this.symbol.updateEstimate(this.selectedCurrency)
            console.log(this.symbol);
        })

    }

    changeCurrency(currency: any) {
        if (this.selectedCurrency !== currency) {
            this.selectedCurrency = currency;
            // TODO: add select ragne save here
        }
    }

    livingWatch(data: FinnhubSymbol[]) {
        console.log('CommandCardFrontComponent', data);
    }
    onSymbolChange(symbol: string) {
        this.selectedSymbol = symbol
        this.getSymbol();
    }
}