import { Component } from '@angular/core';
import { MarriageCase, MarriageCaseData } from '@common/models/legal/marriage-case'
import { CaseService } from '../../../../app/@core/api/case.service';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  loading: boolean = false;
  constructor(private readonly caseService: CaseService) {

  }

  case: MarriageCase = Object.assign({}, MarriageCaseData.empty)

  async submit() {
    // console.log(this.case.i130)
    this.loading = true;
    const d = await this.caseService.demo(this.case)
    console.log('submit res => ', d);
    this.loading = false;
  }
}
