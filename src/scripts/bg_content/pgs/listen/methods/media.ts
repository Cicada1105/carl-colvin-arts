// This file contains methods to create audio and video containers

// Imports
//	interfaces
import { MediaInterface, AudioInterface, VideoInterface } from '../interfaces'
//	methods
import { createElement, createTextElement, createImageElement } from '../../../../global/methods'
import { createCustomControls, createMediaElement } from './special'


const createAudioCont = async (data:AudioInterface):Promise<any> => {
	// Create container to aid in positioning audio element
	let audioCont:any = createElement({className:"mediaCont"});

	// Create image to visually support audio controls
	let audioImg:any = createImageElement({src:data.image.path,alt:data.image.alt,className:"audioImg"});

	let audioEl:any = await createMediaElement(data as AudioInterface);

	// Append audio image to container
	audioCont.appendChild(audioImg);
	// Append audio media to container
	audioCont.appendChild(audioEl);

	return audioCont;
}

const createVideoCont = async (data:VideoInterface):Promise<any> => {
	// Create container to aid in positioning video element
	let videoCont:any = createElement({className:"mediaCont"});

	let videoEl:any = await createMediaElement(data as VideoInterface);

	// Append video media to container
	videoCont.appendChild(videoEl);

	return videoCont;
}

export { createAudioCont, createVideoCont }
