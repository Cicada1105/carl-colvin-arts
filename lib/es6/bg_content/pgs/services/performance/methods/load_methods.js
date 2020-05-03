// This file holds the load methods for the individual
// 	sections on the performance page
// Imports
// data
import { headerData } from '../data';
// methods
import { createSection } from './special_methods';
const loadPerformanceIntro = () => {
    createSection(headerData['performance']);
};
const loadPreviousPerformances = () => {
    createSection(headerData['previous_performances']);
};
const loadRates = () => {
    createSection(headerData['rates']);
};
export { loadPerformanceIntro, loadPreviousPerformances, loadRates };
