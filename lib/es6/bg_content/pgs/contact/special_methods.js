// This file contains special methods that are used in aiding the load methods
// Imports
// 	Global
// 	methods
import { createImageElement } from '../../../global/methods';
let isHome = window.location.pathname.includes("index");
// Image path
const sending_img_path = isHome ? "./resources/pg_imgs/contact_imgs/sending_envelope.png" : "../resources/pg_imgs/contact_imgs/sending_envelope.png";
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
        // Store input data
        let name = document.querySelector("#name");
        let email = document.querySelector("#email");
        let subject = document.querySelector("#subject");
        let body = document.querySelector("#message");
        // Replace button with image
        submit_cont.replaceChild(sending_img, submit_btn);
        // Update message
        submit_msg.innerHTML = "Sending...";
        setTimeout(() => {
            submit_msg.innerHTML = "Message Sent!";
            submit_cont.replaceChild(submit_btn, sending_img);
        }, 2000);
        setTimeout(() => submit_msg.innerHTML = "", 4000);
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
};
const fieldsCompleted = () => {
    let formCompleted = true;
    let inputs = document.getElementsByClassName("inputCont");
    for (let input of inputs) {
        if (input.firstChild.value === "") {
            input.lastChild.innerHTML = "*Incomplete Field";
            formCompleted = false;
        }
        else
            input.lastChild.innerHTML = "*";
    }
    return formCompleted;
};
export { submitForm };
