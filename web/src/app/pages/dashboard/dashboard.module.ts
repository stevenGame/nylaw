import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import {
    NbButtonModule,
    NbCardModule,
    NbProgressBarModule,
    NbTabsetModule,
    NbUserModule,
    NbIconModule,
    NbSelectModule,
    NbListModule,
} from '@nebular/theme';

import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts'
import { DashboardComponent } from './dashboard.component'
import { StatusCardModule } from './status-card/status-card.module';
import { StatsCardFrontComponent } from './profit-card/front-side/stats-card-front.component';
import { StatsBarAnimationChartComponent } from './profit-card/front-side/stats-bar-animation-chart.component';
import { ProfitCardComponent } from './profit-card/profit-card.component';
import { StatsAreaChartComponent } from './profit-card/back-side/stats-area-chart.component';
import { StatsCardBackComponent } from './profit-card/back-side/stats-card-back.component';

import { EarningCardComponent } from './earning-card/earning-card.component';
import { EarningCardBackComponent } from './earning-card/back-side/earning-card-back.component';
import { EarningPieChartComponent } from './earning-card/back-side/earning-pie-chart.component';
import { EarningCardFrontComponent } from './earning-card/front-side/earning-card-front.component';
import { EarningLiveUpdateChartComponent } from './earning-card/front-side/earning-live-update-chart.component';

import { SlideOutComponent } from './slide-out/slide-out.component';

import { TrafficRevealCardComponent } from './traffic-reveal-card/traffic-reveal-card.component';
import { TrafficBarComponent } from './traffic-reveal-card/front-side/traffic-bar/traffic-bar.component';
import { TrafficFrontCardComponent } from './traffic-reveal-card/front-side/traffic-front-card.component';
import { TrafficCardsHeaderComponent } from './traffic-reveal-card/traffic-cards-header/traffic-cards-header.component';
import { TrafficBackCardComponent } from './traffic-reveal-card/back-side/traffic-back-card.component';
import { TrafficBarChartComponent } from './traffic-reveal-card/back-side/traffic-bar-chart.component';

// ECommerceCharts
import { ECommerceChartsPanelComponent } from './charts-panel/charts-panel.component';
import { OrdersChartComponent } from './charts-panel/charts/orders-chart.component';
import { ProfitChartComponent } from './charts-panel/charts/profit-chart.component';
import { ChartPanelHeaderComponent } from './charts-panel/chart-panel-header/chart-panel-header.component';
import { ChartPanelSummaryComponent } from './charts-panel/chart-panel-summary/chart-panel-summary.component';
import { ECommerceLegendChartComponent } from './legend-chart/legend-chart.component';

import { ApiModule } from '../../@core/api/aip.moudle';
import { TestDateCardComponent } from './test-card/test-date-card/test-date-card.component';
import { WatchListComponent } from './watchlist-card/watchlist-card.component'
import { WatchListHeaderComponent } from './watchlist-card/watchlist-cards-header/watchlist-cards-header.component';
import { WatchListFrontCardComponent } from './watchlist-card/front-side/watchlist-frront-card.component';

import { CommandCardComponent } from './command-card/command-card.component'
import { CommandCardFrontComponent } from './command-card/front-side/command-card-front.component'
@NgModule({
    imports: [
        CommonModule,
        StatusCardModule,
        NbButtonModule,
        NbCardModule,
        NbProgressBarModule,
        NbTabsetModule,
        NbUserModule,
        NbIconModule,
        NbSelectModule,
        NbListModule,
        NgxEchartsModule.forRoot({
            echarts
        }),
        ApiModule,
    ],
    declarations: [
        DashboardComponent,
        StatsBarAnimationChartComponent,
        StatsCardFrontComponent,
        ProfitCardComponent,
        StatsAreaChartComponent,
        StatsAreaChartComponent,
        StatsCardBackComponent,
        EarningCardComponent,
        EarningCardFrontComponent,
        EarningCardBackComponent,
        EarningPieChartComponent,
        EarningLiveUpdateChartComponent,

        TrafficRevealCardComponent,
        TrafficBarChartComponent,
        TrafficFrontCardComponent,
        TrafficBackCardComponent,
        TrafficBarComponent,
        TrafficCardsHeaderComponent,
        SlideOutComponent,

        // ECommerce panel
        ECommerceChartsPanelComponent,
        ChartPanelHeaderComponent,
        ChartPanelSummaryComponent,
        OrdersChartComponent,
        ProfitChartComponent,
        ECommerceLegendChartComponent,
        WatchListComponent,
        WatchListHeaderComponent,
        WatchListFrontCardComponent,
        CommandCardComponent,
        CommandCardFrontComponent,
        TestDateCardComponent
    ],
    exports: [
        DashboardComponent,
    ]

})
export class DashboardModule { }