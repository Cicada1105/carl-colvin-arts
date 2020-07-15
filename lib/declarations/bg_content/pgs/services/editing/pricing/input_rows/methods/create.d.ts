import { EventListener } from '../../../../../../../global/interfaces/general';
import { IInputRow, ISelect, IRange, GenericInputInterface as IGenericInput } from '../../../../../../../global/interfaces/inputs';
declare const createInputRow: (rowData: IInputRow) => HTMLDivElement;
declare const createSelectCont: (optionsIn: IGenericInput<ISelect>, listener: EventListener) => HTMLDivElement;
declare const createNumberCont: (ranges: IGenericInput<IRange>, listener: EventListener) => HTMLDivElement;
declare function getMinMaxDates(date: Date): Date[];
declare const createDeadlineCont: (data: IGenericInput<null>, listener: EventListener) => HTMLDivElement;
declare const createEmailCont: (data: IGenericInput<null>, listener: EventListener) => HTMLDivElement;
export { createInputRow, createSelectCont, createNumberCont, createDeadlineCont, createEmailCont, getMinMaxDates };
