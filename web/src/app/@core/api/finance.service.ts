import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FinnhubSymbol, ISymbol } from '@common/models/finnace/symbol'
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FinanceService {
    private baseUrl = '/api/finnhub'
    constructor(private http: HttpClient) {

    }
    // TODO move webservice to bankend server or henden finnhub token
    webSocket() {
        return new WebSocket('wss://ws.finnhub.io?token=cjh4rgpr01qu5vpth67gcjh4rgpr01qu5vpth680');
    }
    getSymbol(symbol: string): Observable<ISymbol> {
        return this.http.get(`${this.baseUrl}/symbol/${symbol}`).pipe(map(s => new FinnhubSymbol(s).update()))
    }

    getCandle(symbol: string, resolution: string, from: string, to: string): Observable<ISymbol[]> {
        return this.http.get<ISymbol[]>(`${this.baseUrl}/candle/${symbol}`, {
            params: {
                resolution,
                from,
                to
            }
        });
    }
}