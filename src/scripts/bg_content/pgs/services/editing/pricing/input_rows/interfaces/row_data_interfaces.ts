// Interfaces for the editing page

interface LiteratureTypeInterface {
	literatureType: SelectOptionInterface;
	child: GenresInterface;
}
interface GenresInterface {
	genres: SelectOptionInterface[];
	child: EditingTypeInterface[];
}
interface EditingTypeInterface {
	editingType: SelectOptionInterface;
	child: EditingRatesInterface;
}
interface EditingRatesInterface {
	rates: RateInterface[];
}
interface SelectOptionInterface {
	display: string;
	value: string;
}
interface RateInterface {
	min: number;
	max: number;
	flatRate?:number;
	perHour: number;
	perWord: number;
}
export { LiteratureTypeInterface, GenresInterface, EditingTypeInterface, SelectOptionInterface, RateInterface }