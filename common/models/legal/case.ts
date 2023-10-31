import { File } from "../../libs/google/file";

export enum CaseStatus {
    created = 'created',
    submit = 'submit',
    processing = 'processing',
    uploaded = 'uploaded',
    // local test used in dev web project dont submit pdf to google drive
    local = 'local' 
}


export interface ICase {

    id: number;
    name: string,
    // google drive folder ID
    folderId: string,
    // data source google sheets id
    dataSheetId: string, // remove sheet id after unit test passed
    type: 'MarriageCase' | 'WorkCase'
    jsonData: string,
    createAt: Date,
    updateAt: Date,
    stauts: CaseStatus,

    // other document such as generated pdf and image need to
    // attached or ORC
    files: File[];
}

