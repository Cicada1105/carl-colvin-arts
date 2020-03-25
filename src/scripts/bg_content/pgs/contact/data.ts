// This file holds the info to be display on the form

// Imports
//  local
// 	interfaces
import { IForm } from './interfaces'

const formData:IForm = {
	header: "Contact",
	form: [
		{
			type:"text",
			name:"name",
			displayName:"Name",
			placeholder:"Enter name..."
		},
		{
			type:"email",
			name:"email",
			displayName:"Email",
			placeholder:"Example@gmail.com"
		},
		{
			type:"text",
			name:"subject",
			displayName:"Subject",
			placeholder:"Enter subject..."
		},
		{
			type:"text",
			name:"message",
			displayName:"Message",
			placeholder:"Enter message..."
		}
	],
	submit: {
		type:"button",
		name:"submitBtn",
		value:"Send"
	}
}

export { formData }