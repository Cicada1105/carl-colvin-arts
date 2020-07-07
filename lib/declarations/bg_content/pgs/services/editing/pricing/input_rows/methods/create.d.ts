import { EditingPricingRowInterface as IPricing, EventListener, RangeInterface } from '../interfaces/misc_interfaces';
import { SelectOptionInterface as IOption } from '../interfaces/row_data_interfaces';
declare const createInputRow: (rowData: IPricing) => HTMLDivElement;
declare const createSelectCont: (options: IOption[], listener: EventListener) => HTMLDivElement;
declare const createNumberCont: (ranges: RangeInterface, listener: EventListener) => HTMLDivElement;
declare function getMinMaxDates(date: Date): Date[];
declare const createDeadlineCont: (listener: EventListener) => HTMLDivElement;
declare const createEmailCont: (listener: EventListener) => HTMLDivElement;
export { createInputRow, createSelectCont, createNumberCont, createDeadlineCont, createEmailCont, getMinMaxDates };
