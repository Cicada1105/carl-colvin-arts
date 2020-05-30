// This file contains special methods that are used in aiding the load methods

// Imports
// 	Global
// 	methods
import { createImageElement } from '../../../global/methods'
//  Local
//  methods
import { request } from './request_methods'

let isHome:boolean = window.location.pathname.includes("index");

// Image path
const sending_img_path:string = isHome ? "./resources/pg_imgs/contact_imgs/sending_envelope.png" : "../resources/pg_imgs/contact_imgs/sending_envelope.png";
//const sending_img_path:string = "/resources/pg_imgs/contact_imgs/sending_envelope.png";

const submitForm = (event:any):void => {
	// Check to make sure each field has been filled out
	if (fieldsCompleted()) {
		// Store button to be display after message processing has been accomplished
		// path[i] selects element that received mouse event. If bubbling is true, rest of array is bubbled elements
		let submit_btn:HTMLInputElement = event.path[0]; 
		// access parent node of submit button
		let submit_cont:HTMLDivElement = <HTMLDivElement>document.querySelector("#submitCont");
		// Access message element to display updates to user
		let submit_msg:HTMLSpanElement = <HTMLSpanElement>submit_cont.lastChild;		// Message
		// Create new iamge element
		let sending_img:HTMLImageElement = createImageElement({src:sending_img_path,idName:"sending_img"});

		// Store input data
		let name:HTMLInputElement = document.querySelector("#name") as HTMLInputElement;
		let email:HTMLInputElement = document.querySelector("#email") as HTMLInputElement;
		let subject:HTMLInputElement = document.querySelector("#subject") as HTMLInputElement;
		let body:HTMLInputElement = document.querySelector("#message") as HTMLInputElement;

		// Replace button with image
		submit_cont.replaceChild(sending_img, submit_btn);
		// Update message
		submit_msg.innerHTML = "Sending...";

		setTimeout(() => {
			submit_msg.innerHTML = "Message Sent!";
			submit_cont.replaceChild(submit_btn, sending_img);
		},2000);
		setTimeout(() => submit_msg.innerHTML = "",4000);
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
}

const fieldsCompleted = ():boolean => {
	let formCompleted:boolean = true;

	let inputs:HTMLCollection = <HTMLCollection>document.getElementsByClassName("inputCont");
	for (let inputCont of inputs) {
		let input:HTMLInputElement = <HTMLInputElement>inputCont.firstChild;
		let inputMsg:HTMLParagraphElement = <HTMLParagraphElement>inputCont.lastChild;

		if (input.value === "") {
			inputMsg.innerHTML = "*Incomplete Field"
			formCompleted = false;
		}
		else
			inputMsg.innerHTML = "*";
	}

	return formCompleted;
}

export { submitForm }