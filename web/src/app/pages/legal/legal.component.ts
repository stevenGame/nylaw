import { Component } from '@angular/core';
import { IWenshuCourt } from '@common/models/openai/chat';
import { ReportService } from 'src/app/@core/api/report.service';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent {
  keywords: string = '';
  court: IWenshuCourt = {
    data: [],
    count: ''
  }
  constructor(private readonly reportService: ReportService) {

  }

  async searchSumbit() {
    this.court = await this.reportService.wenshuCourt(this.keywords)
  }
}
