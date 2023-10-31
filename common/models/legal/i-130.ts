import { Company_Address } from './company-address';
import { Person } from './person'
import { MaritalInfo } from './marital-info'
import { Address } from './address';
import { Contact } from './contact';
import { EntryInfo } from './entry-info'
import { IdentityInfo } from './some-test-model'
export interface I130Data {


    G28: boolean;
    VolagNumber: string;
    AttorneyStateBarNumber: string;
    AttorneyAccountNumber: string;
    //////////////////
    RelationshipQ1: number; // Spouse Parent Brother/Sister Child if number 0 base index
    RelationshipQ2: number;
    RelationshipQ3: number;
    RelationshipQ4: number;
    InCareOfName: string;


    applicant: Person;
    idAddtion: IdentityInfo;
    spouse1: Person;
    // should be spouse1 in marriage case
    beneficiary: Person;
    beneficiaryNative: Person;
    parents: Person[];
    beneficiaryFamilies: Person[];
    beneficiaryChildren: Person[];
    addresses: Address[];
    personData: Person[];
    workHistory: Company_Address[];
    maritalInfo: MaritalInfo;
    maritalInfos: MaritalInfo[];
    beneficiaryMaritalInfo: MaritalInfo;
    spouse1Contact: Contact;
    spouse1EntryInfo: EntryInfo;

}
// export type II130 = ICommon & I130Data;