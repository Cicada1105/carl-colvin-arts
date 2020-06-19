// This file contains methods to create audio and video containers

// Imports
//	interfaces
import { AudioInterface, VideoInterface } from '../interfaces'
import { IImage } from '../../../../global/interfaces'
//	methods
import { createElement, createTextElement, createImageElement } from '../../../../global/methods'
import { createCustomControls, createMediaElement } from './media_elements'

type Media = AudioInterface | VideoInterface;
type VisualDisplayData = IImage | HTMLVideoElement;

const createMediaCont = async (data:Media):Promise<HTMLDivElement> => {
	// Create container to aid in positioning media element
	let mediaCont:HTMLDivElement = createElement({className:"mediaCont"});

	// Create media element and await it to be finished loading
	let mediaEl:any = await createMediaElement(data);

	// Create container for controls 
	let mediaCtrlsCont:HTMLDivElement = createMediaControlsCont(mediaEl);
	// Create media visual container for positioning
	let mediaVisualCont:HTMLDivElement = (data as AudioInterface).image ? createMediaVisualCont((<AudioInterface>data).image) : createMediaVisualCont(<HTMLVideoElement>mediaEl);

	// Append media visual to container
	mediaCont.appendChild(mediaVisualCont);
	// Append audio element to container; video already appended to visual container
	mediaCont.appendChild(mediaCtrlsCont);	// Conditional rendering
	(data as AudioInterface).image && mediaCont.appendChild(mediaEl);
	
	return mediaCont;
}

const createMediaControlsCont = (media:HTMLMediaElement):HTMLDivElement => {
	let cont:HTMLDivElement = createElement({className:"mediaCtrlsCont"});

	// Create media element with data of type Media
	let mediaEl:any = createCustomControls(media);
	// Append media element to container 
	cont.appendChild(mediaEl);

	return cont;
}

/*
	@params
		mediaData:VisualDisplayData (IImage | HTMLVideoElement)

		Note: Audio element does not have image property, so data of type IImage, a subproperty of the
			AudioInterface, is needed. To reduce the need to replace beginning image poster, for 
			HTMLVideoElement, data of type HTMLVideoElement is directly placed into the visual container 
			to be returned.

	@return
		visualCont:HTMLDivElement
		-Div element containing image of AudioInterface's IImage subproperty or HTMLVideoElement's video display
*/
const createMediaVisualCont:(data:VisualDisplayData)=>HTMLDivElement = (visualData:VisualDisplayData):HTMLDivElement => {
	const visualCont:HTMLDivElement = createElement({className:"mediaVisualCont"});

	let mediaEl:HTMLImageElement | HTMLVideoElement = (visualData as IImage).path ? createMediaImage(<IImage>visualData) : <HTMLVideoElement>visualData;

	//  Append visual element to container
	visualCont.appendChild(mediaEl);
	console.log(visualCont);
	return visualCont;
}

const createMediaImage = (imgData:IImage):HTMLImageElement => {
	let source:string = imgData.path;
	let alternative:string = imgData.alt;

	let img:HTMLImageElement = createImageElement({
		src: source,
		alt: alternative
	});

	return img;
}
export { createMediaCont }
