import { Component, ViewChild, Input, EventEmitter, Output } from '@angular/core';

import { FinnhubSymbol } from '@common/models/finnace/symbol';
import { WatchListFrontCardComponent } from './front-side/watchlist-frront-card.component';
@Component({
  selector: 'ait-watchlist-card',
  styleUrls: ['./watchlist-card.component.scss'],
  templateUrl: './watchlist-card.component.html',
})
export class WatchListComponent {


  revealed = false;
  period: string = 'week';
  @Input()
  watchList: string[] = [

  ];

  @Input()
  selectedSymbol: string = 'APPL'

  @ViewChild('watchlistFront')
  watchlistFront!: WatchListFrontCardComponent;
  
  @Output()
  symbolChangeEvent: EventEmitter<string> = new EventEmitter();


  liveWatching(data: FinnhubSymbol[]) {
    this.watchlistFront.liveWatching(data);
  }
  setWatchList(symbols:string[]) {
    this.watchlistFront.setWatchList(symbols)
  }
  toggleView() {
    this.revealed = !this.revealed;
  }

  setPeriodAngGetData(value: string): void {
    this.period = value;
  }

  symbolChanged(symbol: string) {
    this.selectedSymbol = symbol
    this.symbolChangeEvent.emit(symbol)
  };
}