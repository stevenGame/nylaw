import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FinanceService } from "./finance.service";
import { TestDateService } from "./testdate.service";
import { TaskService } from "./task.service";
import { FinnhubWebsocket } from "./finnhub.websocket.service";
import { AitAuthService } from "./ait.auth.service";
import { WatchlistService } from "./watchlist.service";
import { ReportService } from "./report.service";
import { LAParcelService } from "./laparcel.service";
import { CaseService } from "./case.service";

@NgModule({
    imports: [
        HttpClientModule  //imported the module
    ],
    providers: [
        FinanceService,
        TestDateService,
        FinnhubWebsocket,
        AitAuthService,
        TaskService,
        WatchlistService,
        ReportService,
        LAParcelService,
        CaseService,
    ],

})
export class ApiModule { }