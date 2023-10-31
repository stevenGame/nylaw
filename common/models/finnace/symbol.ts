
import { DateUtil } from '../../utils/dateutil'
// only use for take data form finnhub websocket
export interface FinnhubSocketSymbol {
    p: number; // last price
    s: string; // symbol
    t: number; // timestamp
    v: number; // volume
}
export enum FinnhubSocketType {
    trade = 'trade',
    ping = 'ping'
}
export interface FinnhubSocketResponse {
    data: FinnhubSocketSymbol[];
    type: FinnhubSocketType;
}

export interface ISymbol {
    id?: number;
    symbol?: string;
    close?: number; // close price
    high?: number; // highest price
    low?: number; // lowest price
    open?: number; // open
    previousClose?: number; // change percentage 
    dayPercent?: number; // day percent change
    time?: Date; // timestamp
    resolution?: string; // 1, 5, 30, 60, D, M, Y
    createAt?: Date;
}

export class FinnhubSymbol implements ISymbol {
    id?: number;
    symbol?: string;
    close?: number; // close price
    high?: number; // highest price
    low?: number; // lowest price
    open?: number; // open
    previousClose?: number; // change percentage 
    dayPercent?: number; // day percent change
    time?: Date; // timestamp
    resolution?: string; // 1, 5, 30, 60, D, M, Y
    createAt?: Date;

    constructor(init?: ISymbol) {
        Object.assign(this, init)
    }

    reset(init?: ISymbol) {
        Object.assign(this, init)
        this.update();
        return this;
    }
   
    update() {
        if (this.close && this.previousClose) {
            this.dayPercent = ((this.close - this.previousClose) / this.previousClose);
        }
        return this;
    }
    static fromWebSocket(data: FinnhubSocketSymbol): FinnhubSymbol {
        return new FinnhubSymbol({
            symbol: data.s,
            close: data.p,
            open: data.p,
            high: data.p,
            low: data.p,
            resolution: '1',
            time: new Date(data.t)
        });
    }
}