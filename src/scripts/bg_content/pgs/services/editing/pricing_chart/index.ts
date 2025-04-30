/*
	This file will create the chart to be used as a guide
	to the user for checking pricings
*/

// Imports
//	methods
import { createElement, createTextElement } from '@global/methods/elements'
import { constructEditingPricingChartData } from './shared/construct'
import { createSelections } from './selections/create'
import { createChart } from './chart/create'

const loadPricingChart = ():void => {
	let header = createTextElement({
		element: "h2",
		idName: "pricingChartHeader",
		text: "Pricing Chart"
	});

	// Create container to hold selections and chart
	let pricingChartSelectionCont:HTMLDivElement = createElement({
		idName:"pricingChartCont"
	});

	// Construct editing data to be used by pricing chart
	constructEditingPricingChartData();
	// Create selections for users to choose from
	let selections:HTMLDivElement = createSelections();
	// Create the chart for the pricings to be displayed
	let chart:HTMLDivElement = createChart();

	// Append selections and pricing chart to parent container
	pricingChartSelectionCont.appendChild(selections);
	pricingChartSelectionCont.appendChild(chart);

	// Append header and pricing chart selection container to body
	document.body.appendChild(header);
	document.body.appendChild(pricingChartSelectionCont);
}

export { loadPricingChart }