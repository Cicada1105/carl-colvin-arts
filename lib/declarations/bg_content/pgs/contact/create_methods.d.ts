import { LabelInterface as ILabel } from './interfaces/general_input';
import { TextInputInterface as IText, SelectInputInterface as ISelect, TextAreaInterface as ITextArea } from "./interfaces/specific_input";
declare const createLabel: (labelData: ILabel) => HTMLLabelElement;
declare const createTextInput: (textData: IText) => HTMLInputElement;
declare const createSelectInput: (selectData: ISelect) => HTMLSelectElement;
declare const createTextAreaInput: (textAreaData: ITextArea) => HTMLTextAreaElement;
export { createLabel };
export { createTextInput, createSelectInput, createTextAreaInput };
