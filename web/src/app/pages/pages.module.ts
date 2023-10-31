import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ReportsModule } from './reports/reports.module'
import { PagesRoutingModule } from './pages-routing.module';
import { ApiModule } from '../@core/api/aip.moudle';
import { ChatModule } from './chat/chat.module';
import { LamapModule } from './lamap/lamap.module';
import { LegalModule } from './legal/legal.module';
import { NyislawModule } from './nyislaw/nyislaw.module';


// import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ReportsModule,
    ApiModule,
    ChatModule,
    LamapModule,
    LegalModule,
    NyislawModule,
    NbMenuModule.forRoot(),
    // MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,

  ],
})
export class PagesModule {
}
