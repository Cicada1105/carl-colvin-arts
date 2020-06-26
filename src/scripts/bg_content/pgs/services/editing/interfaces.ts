// Interfaces for the editing page

interface RateInterface {
	min: number;
	max: number;
	perHour: number;
	perWord: number;
}
interface HeaderTypeInterface {
	display: string;
	name: string;
}
interface EditingTypeInterfaces {
	type: HeaderTypeInterface;
	rates: RateInterface[];
}
interface LiteratureTypeInterface {
	type: HeaderTypeInterface;
	genres: string[];
	editingTypes: EditingTypeInterfaces[];
}

export { LiteratureTypeInterface, EditingTypeInterfaces, HeaderTypeInterface, RateInterface }