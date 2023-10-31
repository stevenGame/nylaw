import { Component } from '@angular/core';
import { MarriageCase, MarriageCaseData } from '@common/models/legal/marriage-case'
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  case: MarriageCase = Object.assign({}, MarriageCaseData.empty)

  submit() {
    console.log(this.case.i130)
  }
}
