export interface IPDFField {
    type: 'PDFTextField' | 'PDFCheckBox' | 'PDFDropdown';
    name: string;
    value: string | boolean;
    unicode?: boolean; // identify value has unicode or not
}