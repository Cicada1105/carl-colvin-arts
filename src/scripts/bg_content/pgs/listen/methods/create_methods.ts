// This file contains methods to create audio and video containers

// Imports
//	interfaces
import { AudioInterface, VideoInterface } from '../interfaces'
//	methods
import { createElement, createTextElement, createImageElement } from '../../../../global/methods'
import { createCustomControls, createMediaElement } from './media_elements'

type Media = AudioInterface | VideoInterface;

const createMediaCont = async (data:Media):Promise<HTMLDivElement> => {
	// Create container to aid in positioning media element
	let mediaCont:HTMLDivElement = createElement({className:"mediaCont"});

	// Create media image container for positioning
	let mediaImgCont:HTMLDivElement = createMediaImageCont(data);

	//let mediaEl:any = await createMediaElement(data);
	let mediaCtrlsCont:HTMLDivElement = await createMediaControlsCont(data);

	// Append media image to container
	mediaCont.appendChild(mediaImgCont);
	// Append media media to container
	//mediaCont.appendChild(mediaEl);
	mediaCont.appendChild(mediaCtrlsCont);

	return mediaCont;
}

const createMediaControlsCont = async (mediaData:Media):Promise<HTMLDivElement> => {
	let cont:HTMLDivElement = createElement({className:"mediaCtrlsCont"});

	// Create media element with data of type Media
	let mediaEl:any = await createMediaElement(mediaData);
	// Append media element to container 
	cont.appendChild(mediaEl);

	return cont;
}

const createMediaImageCont = (mediaData : Media):HTMLDivElement => {
	const imgCont:HTMLDivElement = createElement({className:"mediaImgCont"});

	let source:string = (mediaData as AudioInterface).image ? (<AudioInterface>mediaData).image.path : (<VideoInterface>mediaData).poster;
	let alternative:string = (mediaData as AudioInterface).image ? (<AudioInterface>mediaData).image.alt : (<VideoInterface>mediaData).source.src;

	let img:HTMLImageElement = createImageElement({
		src: source,
		alt: alternative
	});

	// Append image to its container
	imgCont.appendChild(img);
	
	return imgCont;
}

export { createMediaCont }
