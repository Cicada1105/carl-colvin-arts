import { EditingPricingRowInterface as IPricing, EventListener, RangeInterface } from '../interfaces/misc_interfaces';
import { SelectOptionInterface as IOption } from '../interfaces/row_data_interfaces';
declare const createInputRow: (rowData: IPricing) => HTMLDivElement;
declare const createSelectCont: (options: IOption[], listener: EventListener) => HTMLDivElement;
declare const createNumberCont: (ranges: RangeInterface, listener: EventListener) => HTMLDivElement;
declare const createDeadlineCont: (ranges: RangeInterface, listener: EventListener) => HTMLDivElement;
declare const createEmailCont: () => HTMLDivElement;
export { createInputRow, createSelectCont, createNumberCont, createDeadlineCont, createEmailCont };
