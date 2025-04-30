import { RateInterface as IRate } from '../../../interfaces';
import { IOption } from '@global/interfaces/inputs';
interface LiteratureTypeInterface {
    literatureType: IOption;
    child: GenresInterface;
}
interface GenresInterface {
    genres: IOption[];
    child: EditingTypeInterface[];
}
interface EditingTypeInterface {
    editingType: IOption;
    child: EditingRatesInterface;
}
interface EditingRatesInterface {
    rates: IRate[];
}
export { LiteratureTypeInterface, GenresInterface, EditingTypeInterface, EditingRatesInterface };
