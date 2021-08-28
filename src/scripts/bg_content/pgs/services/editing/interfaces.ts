/*
	This file holds the interfaces and typings
	for the live editing data retrieved from
	the server
*/
import { IOption } from '../../../../global/interfaces/inputs'

interface RateInterface {
	min: number;
	max: number;
	flatRate?:number;
	perHour: number;
	perWord: number;
}

interface IEditingTypeRatesObject {
	rates: RateInterface[];
}

type EditingTypeMapping = Record<string,IEditingTypeRatesObject>;

interface IServerData {
	type: string;
	genres: IOption[];
	editing: EditingTypeMapping;
}

export { 
	RateInterface,
	IEditingTypeRatesObject, 
	EditingTypeMapping, 
	IServerData 
}