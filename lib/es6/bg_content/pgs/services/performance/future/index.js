/*
    File for initializing future performance page
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Imports
import { createTextElement } from '../../../../../global/methods/elements';
import { loadBootstrap } from '../../../../../global/methods/utilities';
import { loadPerformances, loadContactLink } from './methods/load';
const loadFuturePerformances = () => __awaiter(void 0, void 0, void 0, function* () {
    // Create header for future performancecs page
    let title = createTextElement({
        element: "h1",
        text: "Future Performances",
        idName: "futurePerformancesTitle"
    });
    document.body.appendChild(title);
    // Load bootstrap to be used for contact link 
    loadBootstrap();
    // Load future performancces
    yield loadPerformances();
    // Load link to contact page
    loadContactLink();
});
export { loadFuturePerformances };
