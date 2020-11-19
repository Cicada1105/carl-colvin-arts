/*
    File for handling performance routing
*/
// Imports
//	global
import { getCurrentFile } from '../../../../global/methods/utilities';
//	local
import { loadLandingPage } from './landing_pg/index';
import { loadPreviousPerformances } from './past/index';
import { loadMusicStand } from './present/index';
import { loadFuturePerformances } from './future/index';
const loadPerformancePage = () => {
    const currPage = getCurrentFile();
    switch (currPage) {
        case "past":
            loadPreviousPerformances();
            break;
        case "present":
            loadMusicStand();
            break;
        case "future":
            loadFuturePerformances();
            break;
        default:
            loadLandingPage();
            break;
    }
};
export { loadPerformancePage };
