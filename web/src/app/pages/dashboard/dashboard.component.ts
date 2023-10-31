import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FinnhubWebsocket } from 'src/app/@core/api/finnhub.websocket.service';
import { WatchListComponent } from './watchlist-card/watchlist-card.component';
import { CommandCardComponent } from './command-card/command-card.component';
import { ECommerceChartsPanelComponent } from './charts-panel/charts-panel.component';
import { WatchlistService } from '../../@core/api/watchlist.service';
import { FinnhubSymbol } from '@common/models/finnace/symbol';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  watchList: string[] = [
    // 'SOXL',
    // 'AAPL',
    // 'SOXS',
    // 'NVDA',
    // 'FAS',
    // 'FAZ',
    // 'QQQ',
    // 'TQQQ',
    // 'GOOG',
    // 'META',
    // 'AMZN',
    // 'MSFT',
    // 'TSLA',
    // 'TNA',
    // 'NAIL',
    // 'SQQQ'
  ];
  selectedSymbol: string = 'SOXL'
  @ViewChild('wathlistCard')
  wathlistCard!: WatchListComponent
  @ViewChild('commandCard')
  commandCard!: CommandCardComponent

  @ViewChild('strangeyCard')
  strangyCard!: ECommerceChartsPanelComponent

  constructor(private socket: FinnhubWebsocket, private watchlistService: WatchlistService) {

  }

  ngAfterViewInit(): void {
    this.watchlistService.get().subscribe(data => {
      // console.log(data);
      this.watchList.push(...data.map(x => x.symbol))
      this.wathlistCard.setWatchList(this.watchList)
      this.selectedSymbol = this.watchList[0];
      console.log('DashboardComponent, ngAfterViewInit', this.watchList);
      this.socket
        .addListener('watchlist dashboard', this.watchList)
        .listen((data: FinnhubSymbol[]) => {
          console.log('watchlist dashboard', data)
          this.wathlistCard.liveWatching(data);
          this.commandCard.livingWatch(data);
        });
      
    })

  }

  // command card send symbol change on select
  symbolChange(symbol: string) {
    this.commandCard.onSymbolChange(symbol)
    this.strangyCard.onSymbolChange(symbol)
  }
}
