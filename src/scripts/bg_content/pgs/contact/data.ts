// This file holds the info to be display on the form

// Imports
//  local
// 	interfaces
import { IForm } from './interfaces/specific_input'

const formData:IForm = {
	header: "Contact",
	form: {
		textInput: [
			{
				type: "text",
				id: "name",
				placeholder: "Enter name...",
				label: {
					text: "Name",
					for: "name"
				}
			},
			{
				type: "email",
				id: "email",
				placeholder: "example@mail.com",
				label: {
					text: "Email",
					for: "email"
				}
			}
		],
		selectInput: {
			optionGroups: [
				{
					label: "Reedmaking",
					options: [
						{
							value: "general",
							text: "General Info"
						},
						{
							value: "pricing",
							text: "Pricing"
						},
						{
							value: "details",
							text: "Reed Details"
						}, 
						{
							value: "other",
							text: "Other"
						}
					]
				}, 
				{
					label: "Performance",
					options: [
						{
							value: "general",
							text: "General Info"
						},
						{
							value: "pricing",
							text: "Pricing"
						},
						{
							value: "details",
							text: "Performance Details"
						},
						{
							value: "other",
							text: "Other"
						}
					]
				},
				{
					label: "Writing",
					options: [
						{
							value: "general",
							text: "General Info"
						},
						{
							value: "pricing",
							text: "Pricing"
						},
						{
							value: "details",
							text: "Writing Details"
						},
						{
							value: "other",
							text: "Other"
						}
					]
				},
				{
					label: "Editing",
					options: [
						{
							value: "general",
							text: "General Info"
						},
						{
							value: "pricing",
							text: "Pricing"
						},
						{
							value: "details",
							text: "Editing Details"
						},
						{
							value: "other",
							text: "Other"
						}
					]
				},
				{
					label: "Listen",
					options: [
						{
							value: "general",
							text: "General Info"
						},
						{
							value: "specific",
							text: "Specific Piece"
						},
						{
							value: "other",
							text: "Other"
						}
					]
				}
			],
			id: "subject",
			label: {
				text: "Subject",
				for: "subject"
			}
		},
		textAreaInput: {
			id: "message",
			label: {
				text: "Message",
				for: "message"
			},
			rows:"4",
			cols:"10"
		}
	},
	submit: {
		id: "submitBtn",
		value:"Send",
		type:"button"
	}
}

export { formData }