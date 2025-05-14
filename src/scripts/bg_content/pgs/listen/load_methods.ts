// This file holds methods that pertain to the loading of the listen page

// Imports
// 	interfaces
import { AudioInterface, VideoInterface, RowInterface } from './interfaces'
import { IContactLink } from '@global/interfaces/general'
// 	methods
import { createMediaCont } from './methods/create_methods'
import { createElement, createTextElement, createContactLink } from '@global/methods/elements'

type Media = AudioInterface | VideoInterface;

const loadMediaRow = async (data:RowInterface):Promise<void> => {
	let cont:HTMLDivElement = createElement({className:"mediaRow"});

	let mediaDescription:HTMLParagraphElement = createTextElement({text:data.description,className:"mediaDescription"});

	let mediaData:Media = (data.media as AudioInterface).image ? <AudioInterface>data.media : <VideoInterface>data.media;
	let mediaCont:HTMLDivElement = await createMediaCont(mediaData);

	// Create elements to display a controllable border around other elements
	let mediaLeftBorder:HTMLDivElement = createElement({className:"borderLeft"});
	let mediaRightBorder:HTMLDivElement = createElement({className:"borderRight"});

	cont.appendChild(mediaCont);
	cont.appendChild(mediaDescription);
	cont.appendChild(mediaLeftBorder);
	cont.appendChild(mediaRightBorder);

	document.body.appendChild(cont);
}

const loadContactLink = ():void => {
	let linkData:IContactLink = {
		text: "Request Song Info",
		from: "listen",
		path: "./contact.html"
	}
	let contactLinkCont:HTMLDivElement = createContactLink(linkData);
	document.body.appendChild(contactLinkCont);
}

export { loadMediaRow, loadContactLink }