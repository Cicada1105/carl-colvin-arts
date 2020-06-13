// This file contains special methods that are used in aiding the load methods

// Imports
// 	Global
// 	methods
import { createImageElement } from '../../../../global/methods'
//  Local
//  methods
import { request } from './request'

// Image path
const isHome:boolean = window.location.pathname.includes("index");
const sending_img_path:string = (isHome ? "./" : "../") + "resources/pg_imgs/contact_imgs/sending_envelope.png";
//const sending_img_path:string = "/resources/pg_imgs/contact_imgs/sending_envelope.png";

const submitForm = (event:any):void => {
	// Check to make sure each field has been filled out
	if (fieldsCompleted()) {
		let form:HTMLFormElement = event.target;
		let submit_cont:HTMLDivElement = <HTMLDivElement>form.lastElementChild;
		// Access message element to display updates to user
		let submit_msg:HTMLSpanElement = <HTMLSpanElement>submit_cont.lastChild;		// Message

		// Get submit button from form to be displayed after mail has been successfully sent
		// SubmitEvent has one 'submitter' property that returns element that initiated submit
		let submit_btn:HTMLInputElement = event.submitter;

		// Create new iamge element
		let sending_img:HTMLImageElement = createImageElement({src:sending_img_path,idName:"sending_img"});

		// Store input data
		let name:HTMLInputElement = form.querySelector("#name") as HTMLInputElement;
		let email:HTMLInputElement = form.querySelector("#email") as HTMLInputElement;
		let subject:HTMLInputElement = form.querySelector("#subject") as HTMLInputElement;
		let body:HTMLInputElement = form.querySelector("#message") as HTMLInputElement;

		// Replace button with image
		submit_cont.replaceChild(sending_img, submit_btn);
		// Update message
		submit_msg.innerHTML = "Sending...";

		setTimeout(() => {
			submit_msg.innerHTML = "Message Sent!";
			submit_cont.replaceChild(submit_btn, sending_img);
		},2000);
		setTimeout(() => {
			submit_msg.innerHTML = "";
			name.value = "";
			email.value = "";
			subject.value = "none";
			body.value = "";
		},4000);
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
}

const fieldsCompleted = ():boolean => {
	let formCompleted:boolean = true;

	type input = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

	let inputs:HTMLCollection = <HTMLCollection>document.getElementsByClassName("inputCont");
	for (let inputCont of inputs) {
		let firstChild:Element = <Element>inputCont.firstElementChild;
		let input:input = firstChild.tagName === "INPUT" ? <HTMLInputElement>firstChild : (firstChild.tagName === "SELECT" ? (<HTMLSelectElement>firstChild) : (<HTMLTextAreaElement>firstChild));
		let inputMsg:HTMLParagraphElement = <HTMLParagraphElement>inputCont.lastElementChild;
		
		if ((input.value === "") || (input.value === "none")) {
			inputMsg.innerHTML = "*Incomplete Field"
			formCompleted = false;
		}
		else
			inputMsg.innerHTML = "*";
	}

	return formCompleted;
}

export { submitForm }