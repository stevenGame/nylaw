export enum ReportState {
    // DON'T USE CAPTION !! MY LITTLE FINGER ALMOST CRAMP
    created = 'created',
    downloading = 'downloading',
    downloaded = 'downloaded',
    uploading = 'uploading',
    uploaded = 'uploaded',
    unknown = 'unknown'
}
export interface IReport {
    id: number;
    name?: string; // names only
    file?: string; // filename contains file extension
    status: ReportState;
    author?: string;
    source?: string;
    docKey?: string; // thrid part document key only merill edge right now
    published?: Date;
    title?: string;
    ext?: string; // PDF right now maybe will have anther docs depend on logs
    ////////////////////////////////
    // bucket fields
    bucketId?: string; // number or string
    url?: string; // public url
    ////////////////////////////////
    createdAt: Date;
    updatedAt: Date;
    updatedBy?: string; // or string
}


export type ReportSearchOptions = IReport & {
    page: number // use for search by page
}
