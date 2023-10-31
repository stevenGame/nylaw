import { Component, Input, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { FinnhubSymbol } from '@common/models/finnace/symbol';
import { FinanceService } from '../../../../@core/api/finance.service';

@Component({
  selector: 'ait-watchlist-front-card',
  styleUrls: ['./watchlist-frront-card.component.scss'],
  templateUrl: './watchlist-frront-card.component.html',
})
export class WatchListFrontCardComponent implements AfterViewInit {

  @Input()
  watchList: string[] = [];
  @Input()
  selectedSymbol: string = '';
  watchListData: FinnhubSymbol[] = []

  @Output()
  symbolChanged: EventEmitter<string> = new EventEmitter();

  constructor(private readonly financeService: FinanceService) {

  }
  ngAfterViewInit(): void {
    const watchlist = this.watchList
      .map((watchItem, i) => new FinnhubSymbol({
        id: i,
        symbol: watchItem,
        time: new Date()
      }))

    this.watchListData.push(...watchlist);
    this.watchListData.forEach((wsWatchItem) => {
      this.financeService
        .getSymbol(wsWatchItem.symbol || '')
        .subscribe(data => wsWatchItem.reset(data))
    })
  }

  watchListTrack(_: number, s: FinnhubSymbol) {
    return s.symbol;
  }

  setWatchList(symbols: string[]) {
    // this.watchList.push(...symbols);
    console.log('WatchListFrontCardComponent', this.watchList)
    const watchlist = this.watchList
      .map((watchItem, i) => new FinnhubSymbol({
        id: i,
        symbol: watchItem,
        time: new Date()
      }))
    this.watchListData.push(...watchlist);
    this.watchListData.forEach((wsWatchItem) => {
      this.financeService
        .getSymbol(wsWatchItem.symbol || '')
        .subscribe(data => wsWatchItem.reset(data))
    })
  }

  liveWatching(data: FinnhubSymbol[]) {
    data.forEach((liveData) => {
      this.watchListData
        .filter((s) => s.symbol == liveData.symbol)
        .forEach((s) => s.reset(liveData))
    })
  }

  clickSymbol(item: FinnhubSymbol) {
    this.selectedSymbol = item.symbol || ''
    this.symbolChanged.emit(this.selectedSymbol)
  }
}