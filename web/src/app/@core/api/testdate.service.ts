import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITestDate } from '@common/models/test/testDate'
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TestDateService {
    private baseUrl: string = '/api/test/dates';
    constructor(private http: HttpClient) {

    }

    getTestDate(id: number): Observable<ITestDate> {
        return this.http.get(`${this.baseUrl}/${id}`)
    }

    upDateTestDate(testDate: ITestDate) {
        return this.http.post(`${this.baseUrl}/${testDate.id}`, testDate)
    }

}