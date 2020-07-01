// Interfaces for the input rows

// Imports
//	interfaces
import { SelectOptionInterface } from './row_data_interfaces'

interface EditingPricingRowInterface {
	header: string;
	options: SelectOptionInterface[];
}
interface UserSelectedDataInterface {
	literatureType: string;
	genre: string;
	editingType: string;
	wordCount:number;
	deadline?:string;
	email:string;
}
interface EventListener {
	(event:any):void;
}

export { EditingPricingRowInterface, UserSelectedDataInterface, EventListener }