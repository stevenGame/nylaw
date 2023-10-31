export interface SearchResult<T> {
    data: T[];
    size: number;
    // using in paging
    total: number;
    page: number; // page index
}