import { RateInterface as IRate } from '../../interfaces';
import { ILabelRow } from '../../../../../../global/interfaces/inputs';
interface LiteratureTypeInterface {
    literatureType: string;
    editingTypes: Array<EditingTypeInterface>;
}
interface EditingTypeInterface extends ILabelRow {
    id: string;
    rates: Array<IRate>;
}
export { LiteratureTypeInterface, EditingTypeInterface };
