import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, firstValueFrom } from 'rxjs';

export interface IParcelDetail {
  AIN: string
  Latitude: number
  Longitude: number
}

interface ParcelResponse {
  Parcel: IParcelDetail
}
@Injectable()
export class LAParcelService {
  baseUrl = 'https://portal.assessor.lacounty.gov/api/parceldetail?ain'
  constructor(private http: HttpClient) { }

  async getParcelDetail(ain: string) {
    return (await firstValueFrom(this.http.get<ParcelResponse>(`${this.baseUrl}=${ain}`))).Parcel
  }
}
