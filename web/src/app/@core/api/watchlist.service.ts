import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IWatchlist } from '@common/models/watchlist'
@Injectable()
export class WatchlistService {
    baseUrl = '/api/watchlist';
    constructor(private http: HttpClient) {

    }

    get() {
        return this.http.get<IWatchlist[]>(this.baseUrl)
    }
}