import { Component, Input, Output, ViewChild } from "@angular/core";
import { CommandCardFrontComponent } from "./front-side/command-card-front.component";
import { FinnhubSymbol } from "@common/models/finnace/symbol";



@Component({
    selector: 'ait-command-card',
    templateUrl: './command-card.component.html',
    styleUrls: ['./command-card.component.scss']
})
export class CommandCardComponent {



    @Input()
    selectedSymbol = 'SOXL';

    flipped = false;
    @ViewChild('commandFrontCard')
    commandFrontCard!: CommandCardFrontComponent;
    toggleView() {
        this.flipped = !this.flipped;
    }

    onSymbolChange(symbol: string) {
        this.commandFrontCard.onSymbolChange(symbol);
    }
    livingWatch(data: FinnhubSymbol[]) {
        this.commandFrontCard.livingWatch(data)
    }
}