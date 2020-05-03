// Imports
import { loadPerformanceIntro, loadPreviousPerformances, loadRates } from './load_methods';
import { activateCurtains } from './special_methods';
const loadPerformancePage = () => {
    // Load intro to the Performance page
    loadPerformanceIntro();
    // Load section to display/discuss previous performances
    loadPreviousPerformances();
    // Load rates for user to view 
    loadRates();
    // Activate the curtains
    activateCurtains();
};
export { loadPerformancePage };
