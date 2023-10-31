import { AfterViewInit, Component, Input, OnChanges, OnDestroy } from '@angular/core';

import { takeWhile } from 'rxjs/operators';

import { OrdersChart } from '../../../../@core/data/orders-chart';
import { LayoutService } from '../../../../@core/utils/layout.service';
// TODO: use import * as echarts from 'echarts/core'
// to import requried chart componets reduce page size
import * as echarts from 'echarts'
// import * as echarts from 'echarts/core';
import { ISymbol } from '@common/models/finnace/symbol';
import { RangeIndex, profit } from '@common/algorithm'
import { DatePipe } from '@angular/common';
import { FinanceService } from '../../../../@core/api/finance.service';
import { QuantTask, TaskService } from '../../../../@core/api/task.service';
import { interval } from 'rxjs';
import { TaskStatus } from '@common/models/task';

type ChartDataType = [x: string | null, y: number];
type BackTestSummery = {
  title: string;
  value: string;
}
@Component({
  selector: 'ngx-orders-chart',
  styleUrls: ['./charts-common.component.scss'],
  templateUrl: './orders-chart.component.html',
})
export class OrdersChartComponent implements AfterViewInit, OnDestroy, OnChanges {

  @Input()
  ordersChartData: OrdersChart = {
    chartLabel: [],
    linesData: []
  };

  // @Input()
  symbols: ISymbol[] = [];
  chartData: ChartDataType[] = []
  private alive = true;
  quantTask: QuantTask = new QuantTask();
  echartsIntance: any;
  option: any;
  backTest: BackTestSummery[] = [];

  @Input()
  strategy: string = '';
  @Input()
  symbol: string = '';

  constructor(private layoutService: LayoutService,
    private api: FinanceService,
    private task: TaskService) {
    this.layoutService.onSafeChangeLayoutSize()
      .pipe(
        takeWhile(() => this.alive),
      )
      .subscribe(() => this.resizeChart());
  }

  ngOnChanges(): void {
    if (this.option) {
      // this.setOptions2();
      // this.updateOrdersChartOptions(this.ordersChartData);
    }
  }
  labelFomatter(c1: number, c2: number): string {
    return `${(((c2 - c1) / c1) * 100).toFixed(2)} %`;
  }
  chartAreaLabel(idx: RangeIndex) {
    const [s1, s2] = [this.chartData[idx.x1], this.chartData[idx.x2]];
    const [c1, c2] = [s1[1] || 0, s2[1] || 0]
    console.log(s1[0], s2[0])
    return [
      {
        name: this.labelFomatter(c1, c2),
        xAxis: s1[0]
      },
      {
        xAxis: s2[0]
      }
    ]
  }
  setOptions(): void {
    const pipe = new DatePipe("en-US")
    const rangeMax = profit(this.symbols.map(s => s.close || 0));
    const rangeMin = profit(this.symbols.map(s => s.close || 0), (a, b) => a > b);
    this.chartData = this.symbols.map(a => [pipe.transform(a.time, "hh:mm", "EDT"), a.close || 0])

    this.option = {
      xAxis: {
        type: 'category',
        boundaryGap: false
      },
      yAxis: {
        type: 'value',
        scale: true
      },

      visualMap: {
        type: 'piecewise',
        show: false,
        dimension: 0,
        seriesIndex: 0,

        pieces: [
          {
            gt: rangeMax.x1,
            lt: rangeMax.x2,
            color: 'green',
            colorAlpha: '0.4'
          },
          {
            gt: rangeMin.x1,
            lt: rangeMin.x2,
            color: 'red',
            colorAlpha: '0.4'
          }
        ]
      },
      series: [
        {
          type: 'line',
          smooth: 0.6,
          symbol: 'none',

          markLine: {
            symbol: ['none', 'none'],
            label: { show: false },
            data: [
              { xAxis: rangeMax.x1 }, { xAxis: rangeMax.x2 },
              { xAxis: rangeMin.x1 }, { xAxis: rangeMin.x2 }
            ]

          },
          areaStyle: {
            opacity: 0.4
          },
          markArea: {
            itemStyle: {
              opacity: 0
            },
            data: [

              this.chartAreaLabel(rangeMin),
              this.chartAreaLabel(rangeMax)
            ]
          },
          data: this.chartData
        }
      ]
    };
  }

  ngAfterViewInit(): void {

    this.init();
    this.quantTask.setBackTest();
    this.initStrategySummery();
  }
  init() {
    this.api.getCandle(this.symbol, '1', '2023-9-25 9:30', '2023-9-25 17:00').subscribe((data) => {
      this.symbols = data;
      this.setOptions();
    });
  }
  runStrategy() {
    this.quantTask.status = TaskStatus.RUNNING;
    this.task.createQuantTask({ symbol: this.symbol, to: '1y', strategy: this.strategy }).subscribe((data) => {
      this.quantTask = data;
      this.quantTask.status = TaskStatus.RUNNING;
      interval(2000)
        .pipe(takeWhile(() => this.quantTaskRunning()))
        .subscribe(() => {
          this.task.getQuantTask(this.quantTask.id || 0).subscribe(task => {
            this.quantTask = task;
          });
        })
      this.initStrategySummery();
    });
  }

  quantTaskRunning() {
    return this.quantTask.status == TaskStatus.RUNNING;
  }
  initStrategySummery() {
    if (this.backTest.length > 0)
      this.backTest.splice(0, this.backTest.length);

    for (const [title, value] of Object.entries(this.quantTask.backTest)) {
      this.backTest.push({ title, value })
    }
  }

  onChartInit(echarts: any) {
    this.echartsIntance = echarts;
  }

  resizeChart() {
    if (this.echartsIntance) {
      // Fix recalculation chart size
      // TODO: investigate more deeply
      setTimeout(() => {
        this.echartsIntance.resize();
      }, 0);
    }
  }
  onSymbolChange(symbol: string) {
    this.symbol = symbol;
    this.init()
  }
  ngOnDestroy() {
    this.alive = false;
  }
}
