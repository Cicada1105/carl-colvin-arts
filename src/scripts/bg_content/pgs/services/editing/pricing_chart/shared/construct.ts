/*
	File for constructing structure of data for
	the pricing chart on the editing page based 
	on server data structure
*/
//	Global
import { 
	RateInterface as IRate,
	IEditingTypeRatesObject, 
	EditingTypeMapping, 
	IServerData 
} from '../../interfaces'
import { litEditingServerData } from '../../data'
//	Local
import { chartSelectionsData } from './data'
import { 
	LiteratureTypeInterface as ILitType,
	EditingTypeInterface as IEditingType,
} from './interfaces'

export const constructEditingPricingChartData = ():void => {
	let serverData: IServerData[] = litEditingServerData;

	serverData.forEach((serverLitTypeObj: IServerData) => {
		let editingTypes: IEditingType[] = [];
		let serverLitType: string = serverLitTypeObj["type"];
		let editingTypesServerObj: EditingTypeMapping = serverLitTypeObj["editing"];

		for (let serverEditingType of Object.keys(editingTypesServerObj)) {
			/*
				EDITING_TYPE_SHORTHAND Ex.
				"Standard Proofreading" -> "standard proofreading" ->
				["standard","proofreading"] -> "standard"
			*/
			const EDITING_TYPE_SHORTHAND: string = serverEditingType.toLowerCase().split(" ")[0];
			const LABEL_FOR: string = `${EDITING_TYPE_SHORTHAND}${serverLitType}Editing`;

			let editingTypeRatesServerObj: IEditingTypeRatesObject = editingTypesServerObj[serverEditingType];
			let rates:IRate[] = editingTypeRatesServerObj["rates"];

			let editingType: IEditingType = {
				id: LABEL_FOR,
				label: {
					text: serverEditingType,
					for: LABEL_FOR
				},
				rates
			}

			editingTypes.push(editingType);
		}

		let litType: ILitType = {
			literatureType: serverLitType,
			editingTypes
		}

		chartSelectionsData.push(litType);
	})
}