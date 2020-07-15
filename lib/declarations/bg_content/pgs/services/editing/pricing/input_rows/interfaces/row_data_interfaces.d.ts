interface LiteratureTypeInterface {
    literatureType: OptionInterface;
    child: GenresInterface;
}
interface GenresInterface {
    genres: OptionInterface[];
    child: EditingTypeInterface[];
}
interface EditingTypeInterface {
    editingType: OptionInterface;
    child: EditingRatesInterface;
}
interface EditingRatesInterface {
    rates: RateInterface[];
}
interface OptionInterface {
    display: string;
    value: string;
}
interface RateInterface {
    min: number;
    max: number;
    flatRate?: number;
    perHour: number;
    perWord: number;
}
export { LiteratureTypeInterface, GenresInterface, EditingTypeInterface, EditingRatesInterface, OptionInterface, RateInterface };
