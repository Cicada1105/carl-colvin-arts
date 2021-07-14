/*
    This file is for handling the load methods
    of the future performances page
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
//    methods
import { requestFuturePerformances } from './requests';
import { createPerformanceRow } from './create';
import { createTextElement, createContactLink } from '../../../../../../global/methods/elements';
const loadPerformances = () => __awaiter(void 0, void 0, void 0, function* () {
    // Create temporary loading text 
    const loadingTxt = createTextElement({
        element: "h3",
        text: "Loading...",
        idName: "loadingText"
    });
    // Append loading text to body 
    document.body.appendChild(loadingTxt);
    yield requestFuturePerformances().then((performances) => {
        // Request is done: remove loading text
        document.body.removeChild(loadingTxt);
        performances.forEach((performance) => {
            // Create performance section with currentt data 
            let performanceRow = createPerformanceRow(performance);
            // Append performance row to body
            document.body.appendChild(performanceRow);
        });
    });
});
const loadContactLink = () => {
    let linkData = {
        text: "Request Performance",
        from: "future",
        path: "../../contact.html"
    };
    let contactLinkCont = createContactLink(linkData);
    document.body.appendChild(contactLinkCont);
};
export { loadPerformances, loadContactLink };
