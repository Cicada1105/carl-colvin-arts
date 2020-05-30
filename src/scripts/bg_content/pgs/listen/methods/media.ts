// This file contains methods to create audio and video containers

// Imports
//	interfaces
import { MediaInterface, AudioInterface, VideoInterface } from '../interfaces'
//	methods
import { createElement, createTextElement, createImageElement } from '../../../../global/methods'
import { createCustomControls, createMediaElement } from './special'


const createAudioCont = async (data:AudioInterface):Promise<any> => {
	// Create container to aid in positioning audio element
	let audioCont:HTMLDivElement = createElement({className:"mediaCont"});

	// Create image to visually support audio controls
	let audioImg:HTMLImageElement = createImageElement({
		src:data.image.path,
		alt:data.image.alt,
		className:"audioImg"
	});

	let audioEl:any = await createMediaElement(data as AudioInterface);

	// Append audio image to container
	audioCont.appendChild(audioImg);
	// Append audio media to container
	audioCont.appendChild(audioEl);

	return audioCont;
}

const createVideoCont = async (data:VideoInterface):Promise<HTMLDivElement> => {
	// Create container to aid in positioning video element
	let videoCont:HTMLDivElement = createElement({className:"mediaCont"});

	// Create image instead of using poster to allow for common positioning
	let videoImg:HTMLImageElement = createImageElement({src:data.poster,className:"videoImg"});

	let videoEl:any = await createMediaElement(data as VideoInterface);

	// Append video image to container
	videoCont.appendChild(videoImg);
	// Append video media to container
	videoCont.appendChild(videoEl);

	return videoCont;
}

export { createAudioCont, createVideoCont }
