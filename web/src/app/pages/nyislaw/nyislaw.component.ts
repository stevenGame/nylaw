import { AfterViewInit, Component } from '@angular/core';
import { ReportService } from '../../@core/api/report.service';
import { ICase, CaseStatus } from '@common/models/legal/case';
import { File } from '@common/libs/google/file';
class CaseView implements ICase {
  id: number = 0;
  jsonData: string = "";
  createAt: Date = new Date();
  updateAt: Date = new Date();
  stauts: CaseStatus = CaseStatus.created;
  public files: File[] = [];
  public name: string = '';
  public folderId: string = '';
  // data source google sheets id
  dataSheetId: string = '';
  type: 'MarriageCase' | 'WorkCase' = 'MarriageCase'
  loading: boolean = false;
  loaded: boolean = false;
  static load(m: ICase) {
    const c = new CaseView()
    Object.assign(c, m);
    return c;
  }
}

@Component({
  selector: 'app-nyislaw',
  templateUrl: './nyislaw.component.html',
  styleUrls: ['./nyislaw.component.scss']
})
export class NyislawComponent implements AfterViewInit {
  loading: boolean = false;
  cases: CaseView[] = [];

  constructor(private readonly reportService: ReportService) {

  }
  async ngAfterViewInit() {
    const cases = await this.reportService.listCases();
    this.cases = cases.map(CaseView.load);
  }
  async generatePdf(mcase: CaseView) {
    this.loading = true;
    mcase.loading = true;

    await this.reportService.generateCasePDF(mcase)
    mcase.loaded = true;
    mcase.loading = false;
    this.loading = false;
  }

}
