import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LamapComponent } from './lamap.component';
import { ApiModule } from 'src/app/@core/api/aip.moudle';
import { NbButtonModule } from '@nebular/theme';



@NgModule({
  declarations: [
    LamapComponent
  ],
  imports: [
    CommonModule,
    ApiModule,
    NbButtonModule
  ]
})
export class LamapModule { }
