import { Address } from "./address";
import { Contact } from "./contact";
import { Person } from "./person";
import { IncomeInfo } from './income-info';
import { TaxIncome } from './tax-income';
import { Household } from './household';
export interface II864 {
    ApplyType: number;// default 0 in marriage case
    // can from i485
    
    G28: boolean;
    VolagNumber: string;
    AttorneyStateBarNumber: string;
    AttorneyAccountNumber: string;
    // applicant in i130
    principal: Person;
    // spouse in i130
    sponsor: Person;
    families: Person[];
    addresses: Address[];

    conatInfo: Contact;
    
    SponsorCount: string; // or move to I864 Addtion
    incomeInfo: IncomeInfo;
    taxIncome: TaxIncome[];
    household: Household;
}