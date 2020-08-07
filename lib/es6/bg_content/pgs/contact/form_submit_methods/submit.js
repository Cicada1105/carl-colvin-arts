// This file contains special methods that are used in aiding the load methods
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
// 	Global
// 	methods
import { createImageElement } from '../../../../global/methods/elements';
import { isValidEmail } from '../../../../global/methods/utilities';
// Image path
const isHome = window.location.pathname.includes("index");
const sending_img_path = (isHome ? "./" : "../") + "resources/pg_imgs/contact_imgs/sending_envelope.png";
//const sending_img_path:string = "/resources/pg_imgs/contact_imgs/sending_envelope.png";
const submitForm = (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    // Check to make sure each field has been filled out
    if (yield fieldsCompleted()) {
        let form = event.target;
        // Get container holding all rows of contact form
        let rows_cont = form.lastElementChild;
        // Get submit container to access submit button
        let submit_cont = rows_cont.lastElementChild;
        // Access message element to display updates to user
        let submit_msg = submit_cont.lastChild; // Message
        // Get submit button from form to be displayed after mail has been successfully sent
        // SubmitEvent has one 'submitter' property that returns element that initiated submit
        let submit_btn = event.submitter;
        // Create new iamge element
        let sending_img = createImageElement({ src: sending_img_path, idName: "sending_img" });
        // Store input data
        let name = form.querySelector("#name");
        let email = form.querySelector("#email");
        let subject = form.querySelector("#subject");
        let body = form.querySelector("#message");
        // Replace button with image
        submit_cont.replaceChild(sending_img, submit_btn);
        // Update message
        submit_msg.innerHTML = "Sending...";
        setTimeout(() => {
            submit_msg.innerHTML = "Message Sent!";
            submit_cont.replaceChild(submit_btn, sending_img);
        }, 2000);
        setTimeout(() => {
            submit_msg.innerHTML = "";
            name.value = "";
            email.value = "";
            subject.value = "none";
            body.value = "";
        }, 4000);
        /*request(name.value,email.value,subject.value,body.value).then((res) => {
            // Return image back to original submit button
            submit_cont.replaceChild(submit_btn, sending_img);
            alert();
            // Update message
            submit_msg.innerHTML = "Message Sent!";

            console.log(res);
        }).catch((err) => {
            // Return image back to original submit button
            submit_cont.replaceChild(submit_btn, sending_img);
            // Update message
            submit_msg.innerHTML = "Error sending email";

            console.log(err);
            // Clear message after some time
            setTimeout(function() {
                submit_msg.innerHTML = "";
            },4000);
        });*/
    }
});
const fieldsCompleted = () => __awaiter(void 0, void 0, void 0, function* () {
    let formCompleted = true;
    let inputs = document.getElementsByClassName("userInputCont");
    let tempCompleted;
    for (let inputCont of inputs) {
        let firstChild = inputCont.firstElementChild;
        let input = firstChild.tagName === "INPUT" ? firstChild : (firstChild.tagName === "SELECT" ? firstChild : firstChild);
        let inputMsg = inputCont.lastElementChild;
        if ((input.value === "") || (input.value === "none")) {
            inputMsg.innerHTML = "* Incomplete Field";
            formCompleted = false;
        }
        else {
            inputMsg.innerHTML = "*";
            switch (input.id) {
                case "name":
                    tempCompleted = yield isValidName(input.value);
                    // Only store validity if the form validation hasn't been altered
                    formCompleted && (formCompleted = tempCompleted);
                    inputMsg.innerHTML = tempCompleted ? "*" : "* Invalid Character(s)";
                    break;
                case "email":
                    let emailReport = yield isValidEmail(input.value);
                    tempCompleted = emailReport.validEmail;
                    // Only store validity if the form validation hasn't been altered
                    formCompleted && (formCompleted = tempCompleted);
                    let error = emailReport.report;
                    inputMsg.innerHTML = tempCompleted ? "*" : `* ${error.type}`;
                    break;
                case "message":
                    tempCompleted = yield isValidMessage(input.value);
                    // Only store validity if the form validation hasn't been altered
                    formCompleted && (formCompleted = tempCompleted);
                    inputMsg.innerHTML = tempCompleted ? "*" : "* Invalid Character(s)";
                    break;
            }
        }
    }
    return formCompleted;
});
const isValidName = (name) => {
    return new Promise((resolve) => {
        var _a;
        let isValid = true;
        let nameMatch = (_a = name.match(/[^A-Za-z-]/)) !== null && _a !== void 0 ? _a : [];
        isValid = (nameMatch).length === 0;
        resolve(isValid);
    });
};
const isValidMessage = (msg) => {
    return new Promise((resolve) => {
        var _a;
        let isValid = true;
        let msgMatch = (_a = msg.match(/[^\w\s]/)) !== null && _a !== void 0 ? _a : [];
        isValid = (msgMatch).length === 0;
        resolve(isValid);
    });
};
export { submitForm };
