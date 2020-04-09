// This file contains methods to create audio and video media

// Imports
//	interfaces
import { MediaInterface, AudioInterface, VideoInterface } from '../interfaces'
//	methods
import { createElement, createTextElement, createImageElement } from '../../../../global/methods'
import { createCustomControls, createMediaElement } from './special'


const createAudioCont = (data:AudioInterface):any => {
	// Create container to aid in positioning audio element
	let audioCont:any = createElement({className:"mediaCont"});

	// Create image to visually support audio controls
	let audioImg:any = createImageElement({src:data.image.path,alt:data.image.alt,className:"audioImg"});

	let audioEl:any = createMediaElement(data);
	// Append 

	let customCtrls:any;
	// Load controls once media has been completely loaded
	audioEl.oncanplaythrough = () => {
		customCtrls = createCustomControls(audioEl);

		// Only append data once media is fully loaded
		// Append custom controls to container
		audioCont.appendChild(customCtrls);
	}

	// Append audio image to container
	audioCont.appendChild(audioImg);
	// Append audio media to container
	audioCont.appendChild(audioEl);

	return audioCont;
}

const createVideoCont = (data:VideoInterface):any => {
	// Create container to aid in positioning video element
	let videoCont:any = createElement({className:"mediaCont"});

	let videoEl:any = createMediaElement(data);

	let customCtrls:any;
	// Load controls once media has been completely loaded
	videoEl.oncanplaythrough = () => {
		customCtrls = createCustomControls(videoEl);

		// Only append data once media is fully loaded
		// Append custom controls to container
		videoCont.appendChild(customCtrls);
	}

	// Append video media to container
	videoCont.appendChild(videoEl);

	return videoCont;
}

export { createAudioCont, createVideoCont }
