// This file contains special methods that are used in aiding the load methods
// Imports
// 	Global
// 	methods
import { createImageElement } from '../../../../global/methods';
let isHome = window.location.pathname.includes("index");
// Image path
const sending_img_path = isHome ? "./resources/pg_imgs/contact_imgs/sending_envelope.png" : "../resources/pg_imgs/contact_imgs/sending_envelope.png";
//const sending_img_path:string = "/resources/pg_imgs/contact_imgs/sending_envelope.png";
const submitForm = (event) => {
    // Check to make sure each field has been filled out
    if (fieldsCompleted()) {
        let form = event.target;
        let submit_cont = form.lastElementChild;
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
    event.preventDefault();
};
const fieldsCompleted = () => {
    let formCompleted = true;
    let inputs = document.getElementsByClassName("inputCont");
    for (let inputCont of inputs) {
        let firstChild = inputCont.firstElementChild;
        let input = firstChild.tagName === "INPUT" ? firstChild : (firstChild.tagName === "SELECT" ? firstChild : firstChild);
        let inputMsg = inputCont.lastElementChild;
        if ((input.value === "") || (input.value === "none")) {
            inputMsg.innerHTML = "*Incomplete Field";
            formCompleted = false;
        }
        else
            inputMsg.innerHTML = "*";
    }
    return formCompleted;
};
export { submitForm };
