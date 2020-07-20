// File to create specific rows

// Imports
//	data
//	   local
import { literatureRatesSelections as litSelections } from '../data/static'
//	   shared
import { LABELS } from '../../shared/data/static'
//	interfaces
import { 
	IRange, IOption
} from '../../../../../../../global/interfaces/inputs' 
import { 
	LiteratureTypeInterface as ILitType,
	GenresInterface as IGenres,
	EditingTypeInterface as IEditingType,
	RateInterface as IRate
} from '../interfaces/row_data_interfaces'
//	methods
//	   local
import { createInputRow, createSelectCont, createNumberCont, createDeadlineCont, createEmailCont, createSubmitRow } from './create'
//	Event handler
import { LiteratureTypeHandler, GenreHandler, EditingHandler, WordCountHandler, DeadlineHandler, EmailHandler, SubmitHandler } from './event_handlers'

const createLiteratureRow = ():HTMLDivElement => {
	let litOptions:IOption[] = [];

	// Loop through editingRatesSelections, adding the literature type to rowData
	litSelections.forEach((litSelection:ILitType) => {
		litOptions.push(<IOption>litSelection.literatureType);
	});

	// Define "callback" function for event handler once selected value position has been obtained
	const childRowCallback = (childPos:number) => {
		let childElement:HTMLDivElement = createGenreRow(<IGenres>(litSelections[childPos].child));
		literatureRow.appendChild(childElement);
	}

	// Create event listener for when specific literature type option is selected
	//	bind callback function in order to pass data back to "parent" function: createLiteratureRow
	// Create select container
	let selectCont:HTMLDivElement = createSelectCont({
		id: "literature",
		data: {
			options: litOptions
		}
	}, LiteratureTypeHandler.bind(childRowCallback));

	// Create literature row with row data
	let literatureRow:HTMLDivElement = createInputRow({
		label: LABELS[0],
		content: selectCont
	});

	return literatureRow;
}
const createGenreRow = (genreData:IGenres):HTMLDivElement => {

	// Define "callback" function for event handler once selected value position has been obtained
	const childRowCallback = () => {
		// Pass child data of selected literature type to display corresponding editing types
		//	Store return value as child element
		let childElement:HTMLDivElement = createEditingRow(<IEditingType[]>(genreData.child));
		// Append childElement to parent element
		genreRow.appendChild(childElement);
	}
	// Create select container 
	let genreCont:HTMLDivElement = createSelectCont({
		id: "genre",
		data: {
			options: <IOption[]>genreData.genres
		}
	}, GenreHandler.bind(childRowCallback));

	// Create genre row with row data and event handler
	let genreRow:HTMLDivElement = createInputRow({
		label: LABELS[1],
		content: genreCont
	});

	return genreRow;
}
const createEditingRow = (editingData:IEditingType[]):HTMLDivElement => {
	let editingOptions:IOption[] = [];
	
	// Loop through editing types, adding each one to the row data
	editingData.forEach((type:IEditingType) => {
		editingOptions.push(type.editingType);
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
	let editingCont:HTMLDivElement = createSelectCont({
		id: "editing",
		data: {
			options: editingOptions
		}
	}, EditingHandler.bind(childRowCallback));

	// Create editing type row with row data and event handler
	let editingTypeRow:HTMLDivElement = createInputRow({
		label: LABELS[2],
		content: editingCont
	});

	return editingTypeRow;
}
const createWordCountRow = (rates:IRate[]):HTMLDivElement => {
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
	let wordCountCont:HTMLDivElement = createNumberCont({
		id: "count",
		data: {
			min: ranges.min,
			max: ranges.max
		}
	}, WordCountHandler.bind({
		callBack: childRowCallback,
		data: rates
	}));

	// Create word count row with row data row
	let wordCountRow:HTMLDivElement = createInputRow({
		label: LABELS[3],
		content: wordCountCont
	});

	return wordCountRow;
}
const createDeadlineRow = ():HTMLDivElement => {
	const childRowCallback = () => {
		// Create child element
		let childElement:HTMLDivElement = createContactEmailRow();
		// Append child element to parent
		deadlineRow.appendChild(childElement);	
	}
	// Create date container with listener
	let deadlineCont:HTMLDivElement = createDeadlineCont({
		id: "deadline",
		data: null
	},DeadlineHandler.bind(childRowCallback));

	let deadlineRow:HTMLDivElement = createInputRow({
		label: LABELS[4],
		content: deadlineCont
	});

	return deadlineRow;
}
const createContactEmailRow = ():HTMLDivElement => {
	const childRowCallback = () => {
		// Button child element 
		let childElement:HTMLDivElement = createSubmitBtn();
		// Append child element to parent
		emailRow.appendChild(childElement);
	}

	let emailCont:HTMLDivElement = createEmailCont({
		id: "email",
		data: null
	},EmailHandler.bind(childRowCallback));

	// Load emailRow
	let emailRow:HTMLDivElement = createInputRow({
		label: LABELS[5],
		content: emailCont
	});

	return emailRow;
}
const createSubmitBtn = ():HTMLDivElement => {
	const childRowCallback = () => {
		// Clear form and return to beginning
		let litInput:HTMLSelectElement = <HTMLSelectElement>document.getElementById("literature");
		let changeEvent = new Event("change");
		litInput.value = "none";
		litInput.dispatchEvent(changeEvent);
	}

	let submitRow:HTMLDivElement = createSubmitRow(SubmitHandler.bind(childRowCallback));

	return submitRow;
}

export { createLiteratureRow }