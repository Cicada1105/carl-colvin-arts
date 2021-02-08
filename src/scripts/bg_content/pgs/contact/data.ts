// This file holds the info to be display on the form

// Imports
//  local
// 	interfaces
import { IForm } from './interfaces'

const formData:IForm = {
	header: "Contact",
	form: {
		textInput: [
			{
				id: "name",
				label: {
					text: "Name",
					for: "name"
				},
				data: {
					type: "text",
					placeholder: "Enter name..."
				}
			},
			{
				id: "email",
				label: {
					text: "Email",
					for: "email"
				},
				data: {
					type: "email",
					placeholder: "example@mail.com"
				}
			}
		],
		selectInput: {
			id: "subject",
			label: {
				text: "Subject",
				for: "subject"
			},
			data: {
				options: [
					{
						label: "Reedmaking",
						options: [
							{
								display: "General Info",
								value: "general"
							},
							{
								display: "Pricing",
								value: "pricing"
							},
							{
								display: "Reed Details",
								value: "details"
							}, 
							{
								display: "Other",
								value: "other"
							}
						]
					}, 
					{
						label: "Performance",
						options: [
							{
								display: "General Info",
								value: "general"
							},
							{
								display: "Pricing",
								value: "pricing"
							},
							{
								display: "Performance Details",
								value: "details"
							},
							{
								display: "Other",
								value: "other"
							}
						]
					},
					{
						label: "Editing",
						options: [
							{
								display: "General Info",
								value: "general"
							},
							{
								display: "Pricing",
								value: "pricing"
							},
							{
								display: "Editing Details",
								value: "details"
							},
							{
								display: "Other",
								value: "other"
							}
						]
					},
					{
						label: "Listen",
						options: [
							{
								display: "General Info",
								value: "general"
							},
							{
								display: "Specific Piece",
								value: "specific"
							},
							{
								display: "Other",
								value: "other"
							}
						]
					}
				]
			}
		},
		textAreaInput: {
			id: "message",
			label: {
				text: "Message",
				for: "message"
			},
			data: {
				rows:"4",
				cols:"10",
			}
		}
	},
	submit: {
		id: "submitBtn",
		type:"submit"
	}
}

export { formData }