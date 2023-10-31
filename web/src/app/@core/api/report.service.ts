import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReport, ReportSearchOptions } from '@common/models/report';
import { ICase } from '@common/models/legal/case'

import { SearchResult } from '@common/models/generic/search-result'
import { IChatAnswer, IChatSearch, IWenshuCourt } from '@common/models/openai/chat'
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  baseUrl = '/api/reports';
  constructor(private http: HttpClient) {

  }

  async getByPages(index: number, pageSize: number) {
    const reports = await firstValueFrom(this.http.get<SearchResult<IReport>>(`${this.baseUrl}/pages/${index}/size/${pageSize}`))
    return reports
  }

  // free user only support title search
  async search(title: string, pageSize: number) {
    return await firstValueFrom(this.http.post<SearchResult<IReport>>(`${this.baseUrl}/search`, {
      title,
      page: pageSize
    } as ReportSearchOptions));
  }

  // chat right now will move to openAI api later
  async chat(question: string) {
    return await firstValueFrom(
      this.http.post<IChatAnswer>(`/chatapi${this.baseUrl}/crawl-chatgpt`, {
        question
      } as IChatSearch)
    )
  }


  async chatActivate() {
    try {
      await this.http.get('/chatapi')
      return true;
    } catch (error) {
      return false;
    }
  }
  async wenshuCourt(question: string) {
    return await firstValueFrom(
      this.http.post<IWenshuCourt>(`/chatapi${this.baseUrl}/crawl-wenshu-court`, {
        question
      } as IChatSearch)
    )
  }

  async NYISLawCase() {
    return await firstValueFrom(this.http.get('/api/legal/1'))
  }

  async listCases() {
    return await firstValueFrom(this.http.get<ICase[]>('/api/legal'))
  }
  
  async generateCasePDF(mCase: ICase) {
    return await firstValueFrom(this.http.post('/api/legal/' + mCase?.folderId, mCase))
  }
  ///// end chat //////////////////////////
}
