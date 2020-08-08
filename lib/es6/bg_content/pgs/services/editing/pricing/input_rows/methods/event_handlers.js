// Event handlers to be added to input listeners
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//	Data
import { userSelectedData } from '../data/dynamic';
//	Methods
//		Local
import { getMinMaxDates } from './create';
import { Next, Previous } from '../../shared/methods/update_progress';
//		Global
import { isValidEmail } from '../../../../../../../global/methods/utilities';
function LiteratureTypeHandler(event) {
    //	event path holds HTMLCollection hierarchy of elements, starting at the element that fired the event,
    //	of each parent until the last parent, window, is reached
    //		-path[1] holds the container of the input
    //		-nextElementSibling returns the possible child element
    // Clear child element to allow for child update if it exists
    event.path[1].nextElementSibling !== null && event.path[1].nextElementSibling.remove();
    // Display next row if current selection is not default option
    if (event.target.value !== "none") {
        // Get indexed location of selected value minus 1 (to remove default value) to get access to child data
        let selectedLitPos = event.target.selectedIndex - 1;
        // Store value -> HTMLCollection of selectedOptions will only hold 
        //	one value as long as 'multiple' attribute is omitted
        userSelectedData.literatureType = event.target.selectedOptions[0].text;
        // Move progress bar
        Next(1);
        // Pass child data of selected literature type to display corresponding genres
        const callbackFunc = this;
        callbackFunc(selectedLitPos);
        //that.callback(selectedLitPos);
    }
    else
        Previous(0);
}
function GenreHandler(event) {
    // Clear child element to allow for child update if it exists
    event.path[1].nextElementSibling !== null && event.path[1].nextElementSibling.remove();
    // Display next row if current selection is not default option
    if (event.target.value !== "none") {
        // Store value -> HTMLCollection of selectedOptions will only hold 
        //	one value as long as 'multiple' attribute is omitted
        userSelectedData.genre = event.target.selectedOptions[0].text;
        // Move progress bar
        Next(2);
        // Create child element only when value is valid
        const callbackFunc = this;
        callbackFunc();
    }
    else
        Previous(1);
}
function EditingHandler(event) {
    // Clear child element to allow for child update if it exists
    event.path[1].nextElementSibling !== null && event.path[1].nextElementSibling.remove();
    // Display next row if current selection is not default option
    if (event.target.value !== "none") {
        // Get indexed location of selected value minus 1 (to remove default value) to get access to child data
        let selectedEditingTypePos = event.target.selectedIndex - 1;
        // Store value -> HTMLCollection of selectedOptions will only hold 
        //	one value as long as 'multiple' attribute is omitted
        userSelectedData.editingType = event.target.selectedOptions[0].text;
        // Move progress bar
        Next(3);
        const callbackFunc = this;
        callbackFunc(selectedEditingTypePos);
    }
    else
        Previous(2);
}
function WordCountHandler(event) {
    // Clear child element to allow for child update if it exists
    event.path[1].nextElementSibling !== null && event.path[1].nextElementSibling.remove();
    // Handle entered value if "Enter"/"return" keypress event has been triggered or entered value is not empty
    if (((event.type === "keypress") && (event.charCode === 13)) || event.type === "change") {
        let enteredValueStr = event.target.value;
        let enteredValueNum = parseInt(enteredValueStr);
        // Display next row if current selection is valid
        if ((enteredValueNum >= event.target.min) && (enteredValueNum <= event.target.max) && !(enteredValueStr === "")) {
            // 'this' is bound to an object containing callback function and rates
            let rates = this.data;
            let callbackFunc = this.callBack;
            // Store word count 
            userSelectedData.wordCount = enteredValueNum;
            // Find range that entered value falls in to return rates
            let wordCountPos = rates.findIndex((rate) => ((enteredValueNum >= rate.min) && (enteredValueNum <= rate.max)));
            // Store current pricing
            let currentRate = rates[wordCountPos];
            // Store pricing to user data
            currentRate.flatRate && (userSelectedData.pricing.flatRate = currentRate.flatRate);
            userSelectedData.pricing.perWord = currentRate.perWord;
            userSelectedData.pricing.perHour = currentRate.perHour;
            // Move progress bar
            Next(4);
            callbackFunc();
        }
        else
            Previous(3);
    }
}
function DeadlineHandler(event) {
    // Clear child element to allow for child update if it exists
    event.path[1].nextElementSibling !== null && event.path[1].nextElementSibling.remove();
    // Get value entered in by user through datetime-local input
    let enteredDateStr = event.target.value;
    // Date.parse returns integer representing ms sine 
    let enteredDateMs = Date.parse(enteredDateStr);
    let [minDate, maxDate] = getMinMaxDates(new Date());
    // Check if date value is valid based on comparing ms
    if ((enteredDateMs >= minDate.getTime()) && (enteredDateMs <= maxDate.getTime())) {
        // Store value
        userSelectedData.deadline = enteredDateStr;
        // Blur deadline input to make smoother UX
        event.path[0].blur();
        // Move progress bar
        Next(5);
        let callbackFunc = this;
        callbackFunc();
    }
    else
        Previous(4);
}
function EmailHandler(event) {
    return __awaiter(this, void 0, void 0, function* () {
        // Clear child element to allow for child update if it exists
        event.path[1].nextElementSibling !== null && event.path[1].nextElementSibling.remove();
        // Entered email
        let emailStr = event.target.value;
        // Check if keyboard input and charCode is enter key: 13
        if (((event.type === "keypress") && (event.charCode === 13)) || event.type === "change") {
            // Evaluate email field for validation
            if (emailStr === "") {
                console.log("Required Field");
            }
            else {
                let emailReport = yield isValidEmail(emailStr);
                if (emailReport.validEmail) {
                    // Store user email
                    userSelectedData.email = emailStr;
                    let callbackFunc = this;
                    callbackFunc();
                }
                else {
                    console.log(emailReport.report);
                }
            }
        }
    });
}
function SubmitHandler(event) {
    // Store button to be replaced by sending image
    let submitBtn = event.path[0];
    // Store message container to be used to update user
    let msg = submitBtn.nextElementSibling;
    // Store parent in order to replace child element 
    let parent = event.path[1];
    let currentPricing;
    // If there's a flat rate, $$/word and $$/hour are not included
    // 24 hour will be replaced by # of hours Carl logs 
    currentPricing = userSelectedData.pricing.flatRate !== 0 ? `$${userSelectedData.pricing.flatRate} flat rate` : ((userSelectedData.pricing.perWord !== 0 ? `$${userSelectedData.pricing.perWord * userSelectedData.wordCount} + ` : ``) + `$${userSelectedData.pricing.perHour}/hour`);
    let pricingStr = `Your pricing will be: ${currentPricing}\nDo you wish to continue?\n\n`;
    let formulaStr = "*Formula calculated by:\n" +
        "($$/word * # of words) + $$/hour\n" +
        "-or-\n" +
        "$$ flat rate";
    if (confirm(pricingStr.concat(formulaStr))) {
        // Create iamge node to replace button
        let sendingImg = document.createElement("img");
        // Set attributes
        sendingImg.setAttribute("src", "../../resources/pg_imgs/contact_imgs/sending_envelope.png");
        sendingImg.setAttribute("id", "sending_img");
        // Replace button with sending image
        parent.replaceChild(sendingImg, submitBtn);
        // Update message 
        msg.innerHTML = "Sending...";
        // Imitate process of waiting
        setTimeout(() => {
            // Notify user that message has been sent
            msg.innerHTML = "Message Sent!";
            // Replace sending image with button
            parent.replaceChild(submitBtn, sendingImg);
        }, 2000);
        // After a few seconds, return message to original empty state
        setTimeout(() => {
            let callbackFunc = this;
            callbackFunc();
        }, 5000);
    }
}
export { LiteratureTypeHandler, GenreHandler, EditingHandler, WordCountHandler, DeadlineHandler, EmailHandler, SubmitHandler };
