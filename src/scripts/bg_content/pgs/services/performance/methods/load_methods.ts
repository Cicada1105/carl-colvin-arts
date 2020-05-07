// This file holds the load methods for the individual
// 	sections on the performance page

// Imports
// data
import { headerData } from '../data'
// methods
import { createSection } from './create_methods'

const loadPerformanceIntro = ():void => {
	createSection(headerData['performance']);
}

const loadPreviousPerformances = ():void => {
	createSection(headerData['previous_performances']);
}

const loadRates = ():void => {
	createSection(headerData['rates']);
}	

export { loadPerformanceIntro, loadPreviousPerformances, loadRates }