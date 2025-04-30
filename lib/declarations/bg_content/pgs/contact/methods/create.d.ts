import { IText, ISelect, ITextArea, IInputRow, GenericInputInterface as IGenericInput } from "@global/interfaces/inputs";
declare const createInputRow: (rowData: IInputRow) => HTMLDivElement;
declare const createTextCont: (textData: IGenericInput<IText>) => HTMLDivElement;
declare const createSelectCont: (selectData: IGenericInput<ISelect>) => HTMLDivElement;
declare const createTextAreaCont: (textAreaData: IGenericInput<ITextArea>) => HTMLDivElement;
export { createInputRow, createTextCont, createSelectCont, createTextAreaCont };
