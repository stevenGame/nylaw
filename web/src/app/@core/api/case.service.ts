import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CaseStatus, ICase } from "@common/models/legal/case";
import { MarriageCaseData } from "@common/models/legal/marriage-case";
import { firstValueFrom } from "rxjs";

@Injectable()
export class CaseService {
    // http://localhost:3000
    baseUrl = 'https://aitrade-server.onrender.com/api/legal'

    constructor(private http: HttpClient) {

    }
    async submit() {

    }

    async save() {

    }

    async get(id: number) {

    }

    async demo(caseData: MarriageCaseData) {
        console.log('demo', `${this.baseUrl}/demo/1`);
        const mCase: ICase = {
            id: 0,
            name: "demo",
            folderId: "1zLPHcSU2lHmrcaFrQJjnPRcAs5mOMB_I", // x drive 
            dataSheetId: "",
            type: "MarriageCase",
            jsonData: "",
            createAt: new Date(),
            updateAt: new Date(),
            stauts: CaseStatus.created,
            files: []
        }

        mCase.jsonData = JSON.stringify(caseData);
        console.log(mCase);
        return firstValueFrom(this.http.post(`${this.baseUrl}/demo/1`, mCase))
    }
}