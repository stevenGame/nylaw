// import { ICommon } from "./icommon";
import { Address } from "./address";
import { Company_Address } from "./company-address";

import { Person } from "./person";
import { IdentityInfo } from "./some-test-model";
import { EntryInfo } from "./entry-info";
import { MaritalInfo } from "./marital-info";
import { CertsAndBenefit } from './certs-benefit'
import { Contact } from "./contact";
export interface I485Data {

    IssuedSSN: boolean,
    G28: boolean;
    VolagNumber: string;
    AttorneyStateBarNumber: string;
    AttorneyAccountNumber: string;
    InCareOfName: string,

    // 0: entry and admitted 1: paroled as 2: without admission or parole 
    // 3: Other
    // 0 relative of citizen 1 relative of PR 2 fiancé(e) or child of a fiancé 3 widower  
    // 4 VAWA self-petitioner 
    // 5 Alien worker 6 Alien entrepreneur
    // 7 Religious worker 8 Special immigrant juvenile
    // 9 Certain Afghan or Iraqi National
    // 10 Certain G-4 international organization or family
    // 11 Asylum status 12 Refugee status
    // 13 Human trafficking victim 14 Crime victim
    // 15 The Cuban Adjustment 16 The Cuban Adjustment Act for battered spouses and children
    // 17 Haitian Refugee 18 Haitian Refugee spouses and children
    // 19 Lautenberg Parolees 20 Diplomats or high ranking officials
    // 21 Indochinese Parole
    // 22 Diversity Visa program 23 Continuous residence
    // 24 Individual born 25 Other eligibility

    ApplyType: number,
    ApplyTypeOtherEligibility: string,
    ApplyBaseOnBasedOnINA: boolean,
    ReceiptNumber: string,
    PriorityDate: string
    ReceiptNumber2: string,
    PriorityDate2: string,

    ///////////////////
    applicant: Person;
    idAddtion: IdentityInfo;
    spouse1: Person;
    priorSpouse1: Person;
    entryInfo: EntryInfo;
    workHistory: Company_Address[];
    maritalHistory: MaritalInfo[];
    maritalInfo: MaritalInfo;
    spouseMaritalInfo: MaritalInfo;
    certsAndBenefit: CertsAndBenefit[];
    contact: Contact;
    checkboxsheetsData: string[][]; // direct use sheet data map checkboxes
    /////////////////////////////
    // TODO: change it to checkboxes /////
    // checkboxes: Map<number, boolean>, // form page 10-16 yes no checkbox 14 - 84
    // subCheckboxes: Map<string, boolean> // sub checkboxes such as 24.a - 24.d
    ///////////////////
    addresses: Address[],
    company_addresses: Company_Address[],
    parents: Person[],
    spouse_with_you: number,
    children: Person[],
}

// export type II485 = ICommon & I485Data;