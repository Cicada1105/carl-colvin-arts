// File to create specific rows

// Imports
//	data
//	   local
import { literatureRatesSelections as litSelections } from '../data/static'
//	   shared
import { HEADERS } from '../../shared/data/static'
//	interfaces
import { 
	EditingPricingRowInterface as IRow,
	RangeInterface as IRange
} from '../interfaces/misc_interfaces' 
import { 
	LiteratureTypeInterface as ILitType,
	GenresInterface as IGenres,
	EditingTypeInterface as IEditingType,
	SelectOptionInterface as IOption,
	RateInterface as IRate
} from '../interfaces/row_data_interfaces'
//	methods
//	   local
import { createInputRow, createSelectCont, createNumberCont, createDeadlineCont, createEmailCont } from './create'
//	Event handler
import { LiteratureTypeHandler, GenreHandler, EditingHandler, WordCountHandler, DeadlineHandler, EmailHandler } from './event_handlers'

const createLiteratureRow = ():HTMLDivElement => {
	// Create an element of type IRow with default values to create a new row with
	let rowData:IRow = {
		header: HEADERS[0],
		content: null
	};

	let options:IOption[] = [{
		"display": "-Select",
		"value": "select"
	}];
	// Loop through editingRatesSelections, adding the literature type to rowData
	litSelections.forEach((litSelection:ILitType) => {
		options.push(litSelection.literatureType);
	});

	// Define "callback" function for event handler once selected value position has been obtained
	const childRowCallback = (childPos:number) => {
		let childElement:HTMLDivElement = createGenreRow(<IGenres>(litSelections[childPos].child));
		literatureRow.appendChild(childElement);
	}

	// Create event listener for when specific literature type option is selected
	//	bind callback function in order to pass data back to "parent" function: createLiteratureRow
	// Create select container
	rowData.content = createSelectCont(options, LiteratureTypeHandler.bind(childRowCallback));

	// Create literature row with row data
	let literatureRow:HTMLDivElement = createInputRow(rowData);

	return literatureRow;
}
const createGenreRow = (genreData:IGenres):HTMLDivElement => {
	// Create an element of type IRow with default values to create a new row with
	let rowData:IRow = {
		header: HEADERS[1],
		content: null
	};

	let options:IOption[] = [{
		"display": "-Select-",
		"value": "select"
	}]
	// Loop through genres, adding each one to the rowData
	genreData.genres.forEach((genre:IOption) => {
		options.push(genre);
	});

	// Define "callback" function for event handler once selected value position has been obtained
	const childRowCallback = () => {
		// Pass child data of selected literature type to display corresponding editing types
		//	Store return value as child element
		let childElement:HTMLDivElement = createEditingRow(<IEditingType[]>(genreData.child));
		// Append childElement to parent element
		genreRow.appendChild(childElement);
	}
	// Create select container 
	rowData.content = createSelectCont(options, GenreHandler.bind(childRowCallback));

	// Create genre row with row data and event handler
	let genreRow:HTMLDivElement = createInputRow(rowData);

	return genreRow;
}
const createEditingRow = (editingData:IEditingType[]):HTMLDivElement => {
	// Create an element of type IRow with default values to create a new row with
	let rowData:IRow = {
		header: HEADERS[2],
		content: null
	};

	let options:IOption[] = [{
		"display": "-Select-",
		"value": "select"
	}];
	// Loop through editing types, adding each one to the row data
	editingData.forEach((type:IEditingType) => {
		options.push(type.editingType);
	});

	// Define "callback" function for event handler once selected value position has been obtained
	const childRowCallback = (childPos:number) => {
		// Pass child data of selected literature type to display corresponding genres 
		//	Store return value as child element
		let childElement:HTMLDivElement = createWordCountRow(<IRate[]>(editingData[childPos].child.rates));
		// Append childElement to parent element
		editingTypeRow.appendChild(childElement);
	}
	// Create event listener for when specific editing type option is selected
	// Create select container
	rowData.content = createSelectCont(options, EditingHandler.bind(childRowCallback));

	// Create editing type row with row data and event handler
	let editingTypeRow:HTMLDivElement = createInputRow(rowData);

	return editingTypeRow;
}
const createWordCountRow = (rates:IRate[]):HTMLDivElement => {
	// Create an element of type IRow with default values to create a new row with
	let rowData:IRow = {
		header: HEADERS[3],
		content: null
	};

	// Loop through rates, finding lowest value and highest value to determine range
	let ranges:IRange = {
		min: 0,
		max: 0
	}
	rates.forEach((rate:IRate) => {
		(rate.min < ranges.min) && (ranges.min = rate.min);
		(rate.max > ranges.max) && (ranges.max = rate.max);
	});

	const childRowCallback = () => {
		// Create deadline row
		//	Store return value as child element
		let childElement:HTMLDivElement = createDeadlineRow();
		// Append deadline row to parent
		wordCountRow.appendChild(childElement);
	}
	// Create word count container with ranges and handler
	rowData.content = createNumberCont(ranges, WordCountHandler.bind({
		callBack: childRowCallback,
		data: rates
	}));

	// Create word count row with row data row
	let wordCountRow:HTMLDivElement = createInputRow(rowData);

	return wordCountRow;
}
const createDeadlineRow = ():HTMLDivElement => {
	// Create an element of type IRow with default values to create a new row with
	let rowData:IRow = {
		header: HEADERS[4],
		content: null
	};

	const childRowCallback = () => {
		// Create child element
		let childElement:HTMLDivElement = createContactEmailRow();
		// Append child element to parent
		deadlineRow.appendChild(childElement);	
	}
	// Create date container with listener
	rowData.content = createDeadlineCont(DeadlineHandler.bind(childRowCallback));

	let deadlineRow:HTMLDivElement = createInputRow(rowData);

	return deadlineRow;
}
const createContactEmailRow = ():HTMLDivElement => {
	// Create an element of type IRow with default values to create a new row with
	let rowData:IRow = {
		header: HEADERS[5],
		content: null
	};

	rowData.content = createEmailCont(EmailHandler);

	// Load emailRow
	let emailRow:HTMLDivElement = createInputRow(rowData);

	return emailRow;
}

export { createLiteratureRow }