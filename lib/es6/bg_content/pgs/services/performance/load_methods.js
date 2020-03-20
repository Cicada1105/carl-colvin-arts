// This file holds the load methods for the individual
// 	sections on the performance page
// Imports
// data
import { headerData } from './data';
// methods
import { createImageHeader } from './special_methods';
const loadPerformanceIntro = () => {
    createImageHeader(headerData['performance']);
};
const loadPreviousPerformances = () => {
    createImageHeader(headerData['previous_performances']);
};
const loadRates = () => {
    createImageHeader(headerData['rates']);
};
export { loadPerformanceIntro, loadPreviousPerformances, loadRates };
