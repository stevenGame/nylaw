import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NyislawComponent } from './nyislaw.component';
import {
  NbButtonModule, NbCardModule, NbCheckboxModule,
  NbInputModule, NbLayoutComponent, NbLayoutModule, NbListModule, NbSelectModule,
  NbSpinnerModule
} from '@nebular/theme';
import { ApiModule } from 'src/app/@core/api/aip.moudle';
import { ReportService } from 'src/app/@core/api/report.service';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
// import { ThemeModule } from 'src/app/@theme/theme.module';



@NgModule({
  declarations: [
    NyislawComponent,
    FormsComponent,

  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbSpinnerModule,
    FormsModule,
    NbInputModule,
    NbSelectModule,
    NbListModule,
    NbCheckboxModule,
    ApiModule,

  ],
  providers: [ReportService]
})
export class NyislawModule {

}
