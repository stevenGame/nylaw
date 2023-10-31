import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';

import {
    NbCardModule,
} from '@nebular/theme';

import { StatusCardComponent } from './status-card.component';

@NgModule({
    declarations: [
        StatusCardComponent
    ],
    imports: [
        CommonModule,
        NbCardModule,
    ],
    exports: [
        StatusCardComponent
    ]

})
export class StatusCardModule { }