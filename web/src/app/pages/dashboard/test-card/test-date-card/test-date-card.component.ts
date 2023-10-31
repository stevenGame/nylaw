import { Component, Output } from '@angular/core';
import { ITestDate } from '@common/models/test/testDate';
import { TestDateService } from 'src/app/@core/api/testdate.service';

@Component({
  selector: 'test-date-card',
  templateUrl: './test-date-card.component.html',
  styleUrls: ['./test-date-card.component.scss']
})
export class TestDateCardComponent {
  // @Output()
  test: ITestDate = {};
  testn:number = 0;
  constructor(private readonly service: TestDateService) {
  }

  ngOnInit() {
    this.service.getTestDate(1).subscribe(data => {
      this.test = data
    })
  }
  onUpdate() {
    this.service.upDateTestDate(this.test).subscribe(data => {
      console.log(data);
      this.test = data;
    });
  };
}
