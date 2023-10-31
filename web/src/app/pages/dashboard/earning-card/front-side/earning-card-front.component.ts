import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { interval, Subscription } from 'rxjs';
import { switchMap, takeWhile } from 'rxjs/operators';
import { LiveUpdateChart, EarningData } from '../../../../@core/data/earning';
import { ISymbol } from '@common/models/finnace/symbol';
import { FinanceService } from 'src/app/@core/api/finance.service';

@Component({
  selector: 'ngx-earning-card-front',
  styleUrls: ['./earning-card-front.component.scss'],
  templateUrl: './earning-card-front.component.html',
})
export class EarningCardFrontComponent implements OnDestroy, OnInit {
  private alive = true;

  @Input() selectedCurrency: number = 500;
  symbol: ISymbol = {

  }
  dayPercent = 0;
  price = 0;
  selectedSymbol = 'SOXL';
  intervalSubscription: Subscription = new Subscription();
  currencies: number[] = [500, 1000, 3000];
  currentTheme: string = '';
  earningLiveUpdateCardData: LiveUpdateChart = {
    liveChart: [],
    delta: {
      up: false,
      value: 0
    },
    dailyIncome: 0
  };
  liveUpdateChartData: { value: [string, number] }[] = [];
  private socket: WebSocket | undefined;


  constructor(private themeService: NbThemeService,
    private earningService: EarningData,
    private api: FinanceService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
  }

  ngOnInit() {
    this.getEarningCardData(this.selectedCurrency);
    this.getSymbol();

  }
  calcPrice(s: ISymbol) {
    if (s.close && s.open) {
      const pc = (s.previousClose || 0)
      s.dayPercent = ((s.close - pc) / pc);
      this.dayPercent = s.dayPercent;
      this.price = s.close
    }
  }
  private _estimate: number = 0;
  get estimate(): number {
    this._estimate = Math.floor(this.selectedCurrency / this.price) * this.price;
    return this._estimate;

  }
  private _estimateLimit: number = 0;
  get estimateLimit(): number {
    this._estimateLimit = this.price * 1.2 * Math.floor(this.selectedCurrency / this.price)
    return this._estimateLimit;
  }

  getSymbol() {
    
    // this.socket = this.api.webSocket();
    // this.socket.addEventListener('open', (event) => {
    //   // console.log("web socket opening =>", event);
    //   // debugger;
    //   this.socket?.send(JSON.stringify({ 'type': 'subscribe', 'symbol': this.selectedSymbol }));
    // });
    // this.socket.addEventListener('message', (event) => {
    //   try {
    //     // will set type ping when connecting
    //     const { data } = JSON.parse(event.data);
    //     // console.log(data);
    //     if (data) {
    //       this.symbol.close = data[0]?.p;
    //       this.calcPrice(this.symbol);
    //     }

    //   } catch (error) {
    //     debugger;
    //     console.error(error);
    //   }
    // });

    // init symbol
    this.api.getSymbol(this.selectedSymbol).subscribe((data) => {
      this.symbol = data;
      const s = this.symbol;
      this.calcPrice(s);
    })



    // interval(1000)
    //   .pipe(takeWhile(() => this.alive),
    //     switchMap(() => this.api.getSymbol("SOXL")))
    //   .subscribe((data) => {
    //     this.symbol = data;
    //     const s = this.symbol;
    //     if (s.close && s.open) {
    //       s.dayPercent = ((s.close - s.open) / s.open) * 100
    //     }
    //   });
  }
  unsubscribe(symbol: string) {
    this.socket?.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': symbol }))
  }
  changeCurrency(currency: any) {
    if (this.selectedCurrency !== currency) {
      this.selectedCurrency = currency;
      // TODO: add select ragne save here
      // this.getEarningCardData(this.selectedCurrency);
    }
  }

  private getEarningCardData(currency: any) {
    this.earningService.getEarningCardData(currency)
      .pipe(takeWhile(() => this.alive))
      .subscribe((earningLiveUpdateCardData: LiveUpdateChart) => {
        this.earningLiveUpdateCardData = earningLiveUpdateCardData;
        this.liveUpdateChartData = earningLiveUpdateCardData.liveChart;

        this.startReceivingLiveData(currency);
      });
  }

  startReceivingLiveData(currency: any) {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }

    this.intervalSubscription = interval(200)
      .pipe(
        takeWhile(() => this.alive),
        switchMap(() => this.earningService.getEarningLiveUpdateCardData(currency)),
      )
      .subscribe((liveUpdateChartData: any[]) => {
        this.liveUpdateChartData = [...liveUpdateChartData];
      });
  }

  ngOnDestroy() {
    this.alive = false;
    this.unsubscribe(this.selectedSymbol)
  }
}
