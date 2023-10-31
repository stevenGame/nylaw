export interface EntryInfo {
    
    ArrivalStauts: number;
    EverBeenUS: boolean,
    StayExpiraDate: string,
    LastImmigrationStatus: string,
    I94Number: string,
    ArrivalDate: string,
    TravelDocNumber: string,
    PassportOrTravelDocIssueCountry: string,
    PassportExpiraDate: string,
    ClassOfAdmission: string,
    ImmigrationProceedings: boolean;
    
    // cant be edit in i130 ////////
    LastArriveOther: string;
    LastArriveAdmitted: string;
    LastArriveStatus: number;
    CityTown: string;
    State: string;
    /////////////////////////////////
    ParoleEntrance: string;

}