import { Injectable } from "@angular/core";
import { FinnhubSocketResponse, FinnhubSocketSymbol, FinnhubSocketType, FinnhubSymbol } from "@common/models/finnace/symbol";



@Injectable()
export class FinnhubWebsocket {
    private online = false;
    private waittinglist: string[] = []
    private socket: WebSocket;
    private listeners: WatchingListener[] = [];
    constructor() {
        // at least move finnhub apikey to server
        this.socket = new WebSocket('wss://ws.finnhub.io?token=cjh4rgpr01qu5vpth67gcjh4rgpr01qu5vpth680');
        this.socket.addEventListener('open', () => {
            this.online = true;
            if (this.waittinglist.length > 0) {
                this.waittinglist.forEach(s => {
                    this.subscribe(s)
                })
                this.waittinglist = [];
            }
        });
        this.socket.addEventListener('message', (event: MessageEvent<string>) => this.onMessage(event));
    }

    private subscribe(symbol: string) {
        if (this.online) {
            this.socket.send(JSON.stringify({ 'type': 'subscribe', 'symbol': symbol }))
        } else {
            if (!this.waittinglist.includes(symbol)) {
                this.waittinglist.push(symbol);
            }
        }
    }
    public addListener(name: string, symbols: string[]): WatchingListener {
        const listener = new WatchingListener(name);
        listener.init(symbols);
        this.listeners.push(listener);
        symbols.forEach(s => this.subscribe(s));
        return listener;
    }

    private onMessage(event: MessageEvent<string>) {
        const { data } = event;
        const response = JSON.parse(data) as FinnhubSocketResponse
        if (response.data && response.type == FinnhubSocketType.trade) {
            const symbols = (response.data as FinnhubSocketSymbol[]).map(FinnhubSymbol.fromWebSocket)
            this.listeners.forEach(listener => {
                // TODO only post symbol data on listener listen symbol list
                listener.onMessage(symbols);
            })
        } else if (response.type == FinnhubSocketType.ping) {
            console.log('ping....')
        } else {
            console.log(response)
        }
    }

    unsubscribe(symbol: string) {
        this.socket.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': symbol }))
    }
}
export type StocketMessage = (symbols: FinnhubSymbol[]) => void

export class WatchingListener {

    list: string[] = [];
    listener: StocketMessage = (a: FinnhubSymbol[]) => a;
    constructor(private name: string) {

    }

    init(symbols: string[]): WatchingListener {
        this.list = symbols
        return this;
    }

    onMessage(symbols: FinnhubSymbol[]) {
        const filtered = symbols.filter(s => this.list.includes(s.symbol || 'symbol'))
        filtered.forEach(s => s.update())
        this.listener(filtered);
    }
    forEach(callback: (symbol: string) => void) {
        console.log('WatchingListener', this.list);
        this.list.forEach(callback);
    }

    listen(listener: StocketMessage) {
        if (this.list.length == 0) {
            throw new Error("can't listen empty list")
        }
        this.listener = listener;
    }
}