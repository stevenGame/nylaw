import { IPDFMutiCheckBox } from "./pdf-muti-checkbox";

export interface IPDFPageFiller {
    textFieldsMap: Map<string, string>;
    boolFieldsMap: Map<string, boolean>;
    selectFieldsMap: Map<string, string>;
    mutiCheckBoxFields: IPDFMutiCheckBox[];
}