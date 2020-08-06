// This file is responsible for creating the selection chart for data to be displayed
// Imports
//	methods
import { createElement, createTextElement } from '../../../../../../global/methods/elements';
//	data
import { chartSelectionsData } from '../shared/data';
const HEADERS = ["Words", "Hourly Rate", "Flat Rate*"];
const createChart = () => {
    // Create container to hold chart
    let chartCont = createElement({
        idName: "chartCont"
    });
    // Create table element 
    let chartTable = document.createElement("table");
    // Create table header
    let chartTableHead = document.createElement("thead");
    // Create table header row
    let chartTableHeaderRow = document.createElement("tr");
    // Create inidividual table headers
    HEADERS.forEach((header) => {
        let th = createTextElement({
            element: "th",
            text: header
        });
        // Append header to table header row
        chartTableHeaderRow.appendChild(th);
    });
    // Append chart table header row to the table head
    chartTableHead.appendChild(chartTableHeaderRow);
    // Append table header and body to table 
    chartTable.appendChild(chartTableHead);
    updateChartBody.call(chartTable, chartSelectionsData[0].editingTypes[0].rates);
    // Append chart table to table container
    chartCont.appendChild(chartTable);
    return chartCont;
};
function updateChartBody(rates) {
    // Store update data
    let currTable = this !== null && this !== void 0 ? this : document.getElementsByTagName("table")[0];
    // Remove tbody if exists
    currTable && (currTable.children[1] && currTable.children[1].remove());
    // Create table body
    let tableBody = document.createElement("tbody");
    // Create row for each rate
    rates.forEach((rate) => {
        let tableRow = document.createElement("tr");
        // Create table data cell for item of row
        //	Word count/range
        let wordData = rate.max === Infinity ? createTextElement({
            element: "td",
            text: `${rate.min}+`
        }) :
            createTextElement({
                element: "td",
                text: `${rate.min}-${rate.max}`
            });
        //	Hourly rate
        let hourlyRateData = createTextElement({
            element: "td",
            text: `${rate.perHour}`
        });
        // If flat rate is declared, display that, else display perWord amount
        let flatRate = rate.flatRate ? createTextElement({
            element: "td",
            text: `${rate.flatRate}fr`
        }) :
            createTextElement({
                element: "td",
                text: `${rate.perWord}pw`
            });
        // Append word count, hourly rate and falt rate to current table row
        tableRow.appendChild(wordData);
        tableRow.appendChild(hourlyRateData);
        tableRow.appendChild(flatRate);
        // Append current row to table body
        tableBody.appendChild(tableRow);
    });
    // Append body to table
    currTable.appendChild(tableBody);
}
export { createChart, updateChartBody };
