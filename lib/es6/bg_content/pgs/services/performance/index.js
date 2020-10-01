// Imports
import { loadPerformanceIntro, loadPreviousPerformances, loadRates } from './methods/load_methods';
import { activateCurtains } from './methods/misc_methods';
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
