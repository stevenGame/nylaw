import { NgModule } from "@angular/core";
import { ReportsComponent } from "./reports.component";
import { ApiModule } from "src/app/@core/api/aip.moudle";
import { NbCardModule, NbListModule, NbInputModule, NbButtonModule } from "@nebular/theme";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ApiModule,
        NbCardModule,
        NbInputModule,
        NbButtonModule,
        NbListModule
    ],
    declarations: [ReportsComponent],
    exports: [
        ReportsComponent
    ]
})
export class ReportsModule {

}
