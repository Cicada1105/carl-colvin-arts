// This file holds the interfaces that define the data structure 
//	for the pricing chart and pricing selections

// Imports
import { ILabelRow } from '../../../../../../global/interfaces/inputs';

interface LiteratureTypeInterface {
	literatureType: string;
	editingTypes: Array<EditingTypeInterface>;
}
interface EditingTypeInterface extends ILabelRow {
	id:string;
	rates:Array<RateInterface>;
}
interface RateInterface {
	min: number;
	max: number;
	flatRate?:number;
	perHour: number;
	perWord: number;
}

export {
	LiteratureTypeInterface,
	EditingTypeInterface,
	RateInterface
}