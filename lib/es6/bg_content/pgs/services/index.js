// This file will handle which services page to load based on the current file
// Imports
import { getCurrentFile } from '../../../global/methods/utilities';
import { loadServicesLandingPage } from './landing_pg/index';
import { loadEditingPage } from './editing/index';
import { loadPerformancePage } from './performance/index';
import { loadReedmakingPage } from './reedmaking/index';
const loadServicesPage = () => {
    let currPage = getCurrentFile();
    switch (currPage) {
        case "editing":
            loadEditingPage();
            break;
        case "performances":
        case "past":
        case "present":
        case "future":
            loadPerformancePage();
            break;
        case "reedmaking":
            loadReedmakingPage();
            break;
        default:
            loadServicesLandingPage();
            break;
    }
};
export { loadServicesPage };
