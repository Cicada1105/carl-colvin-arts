// Interfaces for the input rows

import { RateInterface } from './row_data_interfaces';

interface UserSelectedDataInterface {
	literatureType: string;
	genre: string;
	editingType: string;
	wordCount:number;
	deadline?:string;
	email:string;
	pricing: {
		flatRate?:number;
		perWord:number;
		perHour:number;
	};
}

export { UserSelectedDataInterface }