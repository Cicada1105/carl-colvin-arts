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
import { createElement, createTextElement } from '../../../../../../global/methods/elements';
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
    // Create container for contact link text and button
    let cont = createElement({
        idName: "contactLink"
    });
    // Create header for contact link 
    let linkText = createTextElement({
        element: "h2",
        text: "Request Performance"
    });
    // Create arrow element to be used as "button" image
    let iBtn = createElement({
        element: "i",
        className: "fas fa-chevron-right"
    });
    // Add event listener to iBtn to set session to send to contact page 
    iBtn.addEventListener("click", function () {
        // Set session storage to be "from" future performances 
        sessionStorage.setItem("from", "future");
        // Navigate to contact page 
        window.location.assign("../../contact.html");
    }, { once: true });
    // Append text and arrow to contact container 
    cont.appendChild(linkText);
    cont.appendChild(iBtn);
    document.body.appendChild(cont);
};
export { loadPerformances, loadContactLink };
