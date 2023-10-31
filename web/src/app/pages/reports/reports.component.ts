import { AfterViewInit, Component, Output } from "@angular/core";
import { IReport } from '@common/models/report'
import { AitAuthService } from "../../@core/api/ait.auth.service";
import { ReportService } from "src/app/@core/api/report.service";
import { SearchResult } from "@common/models/generic/search-result";


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements AfterViewInit {


  title: string = '';

  total = 0;
  pager: string = 'Showing 1 - 10 of 1000 total '
  pageSize: number = 10;
  pageIdx: number = 0;

  reports: IReport[] = []
  constructor(private readonly reportService: ReportService) {

  }

  async ngAfterViewInit() {
    const res = await this.reportService.getByPages(this.pageIdx, this.pageSize);
    this.displayData(res)
  }

  async searchSumbit() {
    console.log('on submit', this.title);
    if (this.title != '') {
      const res = (await this.reportService.search(this.title, this.pageSize));

      this.displayData(res);
    }
  }

  displayData(res: SearchResult<IReport>) {
    this.reports = res.data;
    
    this.total = res.total;
    this.displayPager();
  }
  displayPager() {
    const from: number = (1 + this.pageIdx * this.pageSize);
    // console.log(from, this.pageIdx, this.pageSize)
    const to: number = ((this.pageIdx + 1) * this.pageSize);
    this.pager = `Showing ${from} - ${Math.min(to, this.total)} of ${this.total} in total`
  }
  async nextPage() {
    const res = await this.reportService.getByPages(this.pageIdx + 1, this.pageSize);

    this.pageIdx++;
    this.displayData(res)
  }

  async prevPage() {
    if (this.pageIdx > 0) {
      const res = await this.reportService.getByPages(this.pageIdx - 1, this.pageSize);
      this.pageIdx--;
      this.displayData(res)
    }

  }
}