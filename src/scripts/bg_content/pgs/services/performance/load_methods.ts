// This file holds the load methods for the individual
// 	sections on the performance page

// Imports
// data
import { headerData } from './data'
// methods
import { createImageHeader } from './special_methods'

const loadPerformanceIntro = ():void => {
	createImageHeader(headerData['performance']);
}

const loadPreviousPerformances = ():void => {
	createImageHeader(headerData['previous_performances']);
}

const loadRates = ():void => {
	createImageHeader(headerData['rates']);
}

export { loadPerformanceIntro, loadPreviousPerformances, loadRates }