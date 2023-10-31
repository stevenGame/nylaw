import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalComponent } from './legal.component';
import { FormsModule } from '@angular/forms';
import { ApiModule } from 'src/app/@core/api/aip.moudle';
import { NbButtonModule, NbCardModule, NbInputModule, NbListModule } from '@nebular/theme';



@NgModule({
  declarations: [
    LegalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ApiModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbListModule
  ]
})
export class LegalModule { }
