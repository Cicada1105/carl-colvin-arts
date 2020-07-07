// File to create specific rows

// Imports
//	data
//	   local
import { literatureRatesSelections as litSelections } from '../data/static'
import { userSelectedData } from '../data/dynamic'
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
//	   globale
import { createElement } from '../../../../../../../global/methods'

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

	// Create event listener for when specific literature type option is selected
	let childElement:HTMLDivElement;
	// Create select container
	rowData.content = createSelectCont(options, (event:any) => {
		// Clear child element to allow for child update if it exists
		((typeof childElement) !== "undefined") && childElement.remove();
		
		// Display next row if current selection is not default option
		if (event.target.value !== "select") {
			// Find indexed location of selected value to get child data
			let selectedLitPos:number = litSelections.findIndex((litSelection:ILitType) => {
				return litSelection.literatureType.value === event.target.value;
			});
			// Store selected value
			userSelectedData.literatureType = litSelections[selectedLitPos].literatureType.display;

			// Pass child data of selected literature type to display corresponding genres 
			childElement = createGenreRow(<IGenres>(litSelections[selectedLitPos].child));
			// Append childElement to parent element
			literatureRow.appendChild(childElement);
		}

	})
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

	// Create event listener for when specific literature genre option is selected
	let childElement:HTMLDivElement;
	// Create select container 
	rowData.content = createSelectCont(options, (event:any) => {
		// Clear child element to allow for child update if it exists
		((typeof childElement) !== "undefined") && childElement.remove();

		// Display next row if current selection is not default option
		if (event.target.value !== "select") {
			// Store value -> HTMLCollection of selectedOptions will only hold 
			//	one value as long as 'multiple' attribute is omitted
			userSelectedData.genre = event.target.selectedOptions[0].text;

			// Pass child data of selected literature type to display corresponding editing types
			childElement = createEditingRow(<IEditingType[]>(genreData.child));
			// Append childElement to parent element
			genreRow.appendChild(childElement);
		}
	})

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

	// Create event listener for when specific editing type option is selected
	let childElement:HTMLDivElement;
	// Create select container
	rowData.content = createSelectCont(options, (event:any) => {
		// Clear child element to allow for child update if it exists
		((typeof childElement) !== "undefined") && childElement.remove();

		// Display next row if current selection is not default option
		if (event.target.value !== "select") {
			// Find indexed location of selected value to get child data
			let selectedEditingTypePos:number = editingData.findIndex((type:IEditingType) => {
				return type.editingType.value === event.target.value;
			});
			// Store display value based on selected value
			userSelectedData.editingType = editingData[selectedEditingTypePos].editingType.display;

			// Pass child data of selected literature type to display corresponding genres 
			childElement = createWordCountRow(<IRate[]>(editingData[selectedEditingTypePos].child.rates));
			// Append childElement to parent element
			editingTypeRow.appendChild(childElement);
		}
	});

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

	// Create word container with ranges and handler
	let childElement:HTMLDivElement;
	rowData.content = createNumberCont(ranges, (event:any) => {
		// Clear child element to allow for child update if it exists
		((typeof childElement) !== "undefined") && childElement.remove();

		let enteredValueStr:string = event.target.value;
		let enteredValueNum:number = parseInt(enteredValueStr);
		// Display next row if current selection is valid
		if ((enteredValueNum >= ranges.min) && (enteredValueNum <= ranges.max) && !(enteredValueStr === "")) {
			// Store word count 
			userSelectedData.wordCount = enteredValueNum;
			// Find range that entered value falls in to return rates
			let wordCountPos:number = rates.findIndex((rate:IRate) => {
				return ((enteredValueNum >= rate.min) && (enteredValueNum <= rate.max));
			});

			// Store current pricing
			let currentRate:IRate = rates[wordCountPos];
			let currentPricing:number;
			// If there's a flat rate, $$/word and $$/hour are not included
			// 24 hour will be replaced by # of hours Carl logs 
			currentPricing = currentRate.flatRate ?? (currentRate.perWord * enteredValueNum) + (currentRate.perHour * 24);
			
			// Create deadline row
			childElement = createDeadlineRow();
			// Append deadline row to parent
			wordCountRow.appendChild(childElement);
		}
	});

	// Create word count row with row data row
	let wordCountRow:HTMLDivElement = createInputRow(rowData);

	return wordCountRow;
}
function getMinMaxDates(date:Date) {
	// Create new Dates that reflect the current time
	let min = new Date();
	let max = new Date();

	// Add 1 day to current time for min value
	let futureMinDateInMs:number = date.getTime() + (1 * 24 * 60 * 60 * 1000);
	// Add 547.5 days(1.5 * 365) to current time for 1.5 years from current time as the max time
	let futureMaxDateInMs:number = date.getTime() + (1.5 * 365 * 24 * 60 * 60 * 1000);

	// Set times of min and max dates
	min.setTime(futureMinDateInMs);
	max.setTime(futureMaxDateInMs);

	// Return values as an object
	return [min, max];
}
function formatDate(currDate:Date):string {
	let month:number = currDate.getMonth() + 1;
	let monthStr:string = month < 10 ? "0" + month : month.toString();
	let date:number = currDate.getDate() ;
	let dateStr:string = date < 10 ? "0" + date : date.toString();

	return `${currDate.getFullYear()}-${monthStr}-${dateStr}T${currDate.getHours()}:${currDate.getMinutes()}:${currDate.getSeconds()}`;
}
const createDeadlineRow = ():HTMLDivElement => {
	// Create an element of type IRow with default values to create a new row with
	let rowData:IRow = {
		header: HEADERS[4],
		content: null
	};

	// Get min and max dates from current time using object destructuring
	let currDate:Date = new Date();
	let [minDate, maxDate] = getMinMaxDates(currDate);

	let ranges:IRange = {
		min: formatDate(minDate),
		max: formatDate(maxDate)
	}
	
	// Create date container with ranges and listener
	let childElement:HTMLDivElement;
	rowData.content = createDeadlineCont(ranges, (event:any) => {

		// Clear child element to allow for child update if it exists
		((typeof childElement) !== "undefined") && childElement.remove();

		// Get value entered in by user through datetime-local input
		let enteredDateStr:string = event.target.value;
		// Date.parse returns integer representing ms sine 
		let enteredDateMs:number = Date.parse(enteredDateStr);

		// Check if date value is valid based on comparing ms
		if ((enteredDateMs >= minDate.getTime()) && (enteredDateMs <= maxDate.getTime())) {
			// Store value
			userSelectedData.deadline = enteredDateStr;

			// Create child element
			childElement = createContactEmailRow();
			// Append child element to parent
			deadlineRow.appendChild(childElement);	
		}
		// Store current date
		userSelectedData.deadline = event.target.value;
	});

	let deadlineRow:HTMLDivElement = createInputRow(rowData);

	return deadlineRow;
}
const createContactEmailRow = ():HTMLDivElement => {
	// Create an element of type IRow with default values to create a new row with
	let rowData:IRow = {
		header: HEADERS[5],
		content: null
	};

	rowData.content = createEmailCont();

	// Load emailRow
	let emailRow:HTMLDivElement = createInputRow(rowData);

	return emailRow;
}

export { createLiteratureRow, formatDate }