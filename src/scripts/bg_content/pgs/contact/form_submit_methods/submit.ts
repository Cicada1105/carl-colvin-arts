// This file contains special methods that are used in aiding the load methods

// Imports
// 	Global
// 	methods
import { createImageElement } from '../../../../global/methods/elements'
import { isValidEmail } from '../../../../global/methods/utilities'
//	interfaces
import { EmailReport, EmailError } from '../../../../global/interfaces/errors'
//  Local
//  methods
import { request } from './request'

// Image path
const isHome:boolean = window.location.pathname.includes("index");
const sending_img_path:string = (isHome ? "./" : "../") + "resources/pg_imgs/contact/sending_envelope.png";

const submitForm = async (event:any):Promise<void> => {
	event.preventDefault();

	// Check to make sure each field has been filled out
	if (await fieldsCompleted()) {
		let form:HTMLFormElement = event.target;
		// Get container holding all rows of contact form
		let rows_cont:HTMLDivElement = <HTMLDivElement>form.lastElementChild;
		// Get submit container to access submit button
		let submit_cont:HTMLDivElement = <HTMLDivElement>rows_cont.lastElementChild;
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
		// Retrieve the select element containing subject info
		let subjectSelect:HTMLSelectElement = form.querySelector("#subject") as HTMLSelectElement;
		// Retrieve the option that the user has selected
		let subject:HTMLOptionElement = subjectSelect.selectedOptions[0] as HTMLOptionElement;
		// Retrieve the Option Group element associated with the selected option
		let group:HTMLOptGroupElement = subject.parentElement as HTMLOptGroupElement;
		let body:HTMLInputElement = form.querySelector("#message") as HTMLInputElement;

		// Replace button with image
		submit_cont.replaceChild(sending_img, submit_btn);
		// Update message
		submit_msg.innerHTML = "Sending...";

		request(name.value,email.value,`${group.label} - ${subject.value}`,body.value).then((res) => {
			// Return image back to original submit button
			submit_cont.replaceChild(submit_btn, sending_img);
			// Update message
			submit_msg.innerHTML = "Message Sent!";
		}).catch((err) => {
			// Return image back to original submit button
			submit_cont.replaceChild(submit_btn, sending_img);
			// Update message
			submit_msg.innerHTML = "Error sending email";
		}).finally(() => {
			// Clear message after some time
			setTimeout(function() {
				submit_msg.innerHTML = "";
			},4000);

			name.value = "";
			email.value = "";
			subject.value = "none";
			body.value = "";
		});
	}
}

const fieldsCompleted = async ():Promise<boolean> => {
	let formCompleted:boolean = true;

	type input = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

	let inputs:HTMLCollection = <HTMLCollection>document.getElementsByClassName("userInputCont");

	let tempCompleted:boolean;
	for (let inputCont of inputs) {
		let firstChild:Element = <Element>inputCont.firstElementChild;
		let input:input = firstChild.tagName === "INPUT" ? <HTMLInputElement>firstChild : (firstChild.tagName === "SELECT" ? (<HTMLSelectElement>firstChild) : (<HTMLTextAreaElement>firstChild));
		let inputMsg:HTMLParagraphElement = <HTMLParagraphElement>inputCont.lastElementChild;
		
		if ((input.value === "") || (input.value === "none")) {
			inputMsg.innerHTML = "* Incomplete Field"
			formCompleted = false;
		}
		else {
			inputMsg.innerHTML = "*"
			switch(input.id) {
				case "name":
					tempCompleted = await isValidName(input.value);
					// Only store validity if the form validation hasn't been altered
					formCompleted && (formCompleted = tempCompleted);
					inputMsg.innerHTML = tempCompleted ? "*" : "* Invalid Character(s)";
				break;
				case "email":
					let emailReport:EmailReport = await isValidEmail(input.value);
					tempCompleted = emailReport.validEmail;
					// Only store validity if the form validation hasn't been altered
					formCompleted && (formCompleted = tempCompleted);
					let error:EmailError = <EmailError>emailReport.report;
					inputMsg.innerHTML = tempCompleted ? "*" : `* ${error.type}`
				break;
				case "message":
					tempCompleted = await isValidMessage(input.value);
					// Only store validity if the form validation hasn't been altered
					formCompleted && (formCompleted = tempCompleted);
					inputMsg.innerHTML = tempCompleted ? "*" : "* Invalid Character(s)";
				break;
			}
		}
	}

	return formCompleted;
}
const isValidName = (name:string):Promise<boolean> => {
	return new Promise((resolve) => {
		let isValid:boolean = true;

		let nameMatch:string[] = name.match(/[^\'\"\x20A-Za-z/.?!-]/) ?? [];
		isValid = (nameMatch).length === 0;

		resolve(isValid);
	})
}
const isValidMessage = (msg:string):Promise<boolean> => {
	return new Promise((resolve) => {
		let isValid:boolean = true;

		let msgMatch:string[] = msg.match(/[^\'\"\x20A-Za-z0-9/.?!-]/) ?? [];
		isValid = (msgMatch).length === 0;

		resolve(isValid);
	});
}

export { submitForm }