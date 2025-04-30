/*
	File for constructing structure of data for
	the pricing inputs of the editing page based 
	on server data structure
*/
// Imports
//	Local
import { 
	LiteratureTypeInterface as ILitType,
	EditingTypeInterface as IEditingType
} from '../interfaces/row_data_interfaces'
//	Global
import {
	RateInterface as IRate,
	IEditingTypeRatesObject, 
	EditingTypeMapping, 
	IServerData 
} from '../../../interfaces';
import { litEditingServerData } from '../../../data';
import { IOption } from '@global/interfaces/inputs'

export const constructEditingData = ():ILitType[] => {
	let serverData: IServerData[] = litEditingServerData;
	let editingData:ILitType[] = [];

	serverData.forEach((serverLitType:IServerData) => {
		let litTypeOpt:IOption = {
			display: serverLitType["type"],
			value: serverLitType["type"].toLowerCase().split(" ").join("_")	
		};

		let genresOpts:IOption[] = [];
		serverLitType.genres.forEach((genre:IOption) => 
			genresOpts.push({
				display: genre["display"],
				value: genre["value"]
			})
		)

		let editingTypesObj: IEditingType[] = [];
		let editingTypesServerObj: EditingTypeMapping = serverLitType["editing"];
		for (let type of Object.keys(editingTypesServerObj)) {
			let editingTypeOpt: IOption = {
				display: type,
				value: type.toLowerCase().split(" ")[0]
			}

			let editingTypeRatesServerObj: IEditingTypeRatesObject = editingTypesServerObj[type];
			
			let rates:IRate[] = editingTypeRatesServerObj["rates"];

			let editingTypeObj: IEditingType = {
				editingType: editingTypeOpt,
				child: { rates }
			}

			editingTypesObj.push(editingTypeObj);
		}

		let litType: ILitType = {
			literatureType: litTypeOpt,
			child: {
				genres: genresOpts,
				child: editingTypesObj
			}
		}
		editingData.push(litType);
	});
	
	return editingData;
}