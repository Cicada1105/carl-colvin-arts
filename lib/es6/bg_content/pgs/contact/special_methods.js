// This file contains special methods that are used in aiding the load methods
// Imports
// 	Global
// 	methods
import { createImageElement } from '../../../global/methods';
// Image path
const sending_img_path = "../resources/contact_imgs/sending_envelope.png";
const submitForm = (event) => {
    // Check to make sure each field has been filled out
    if (fieldsCompleted()) {
        // Store button to be display after message processing has been accomplished
        // path[i] selects element that received mouse event. If bubbling is true, rest of array is bubbled elements
        let submit_btn = event.path[0];
        // access parent node of submit button
        let submit_cont = document.querySelector("#submitCont");
        // Access message element to display updates to user
        let submit_msg = submit_cont.lastChild; // Message
        // Create new iamge element
        let sending_img = createImageElement({ src: sending_img_path, idName: "sending_img" });
        // Replace button with image
        submit_cont.replaceChild(sending_img, submit_btn);
        // Update message
        submit_msg.innerHTML = "Sending...";
        // Mimic delay in sending message
        setTimeout(function () {
            // Return image back to original submit button
            submit_cont.replaceChild(submit_btn, sending_img);
            // Update message
            submit_msg.innerHTML = "Message Sent!";
        }, 2000);
        // Clear message after some time
        setTimeout(function () {
            submit_msg.innerHTML = "";
        }, 4000);
    }
    else {
        alert("Form not completed");
    }
};
const fieldsCompleted = () => {
    let formCompleted = true;
    let inputs = document.getElementsByClassName("textInput");
    for (let input of inputs) {
        if (input.children[2].value === "") {
            formCompleted = false;
        }
    }
    return formCompleted;
};
export { submitForm };
