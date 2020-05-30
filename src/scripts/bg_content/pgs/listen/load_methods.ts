// This file holds methods that pertain to the loading of the listen page

// Imports
// 	interfaces
import { AudioInterface, VideoInterface, RowInterface } from './interfaces'
// 	methods
import { createAudioCont, createVideoCont } from './methods/media'
import { createElement, createTextElement } from '../../../global/methods'

const loadBootstrap = ():void => {
	// Create link tag for Bootstrap Font Awesome icons
	let bootstrapLink:HTMLScriptElement = document.createElement('script');
	// Add href attribute
	bootstrapLink.setAttribute('src','https://kit.fontawesome.com/296e9763f7.js');

	// Append Bootstrap cdn to head for font asesome icons
	document.head.appendChild(bootstrapLink);
}
const loadAudioRow = async (data:RowInterface):Promise<any> => {
	let cont:HTMLDivElement = createElement({className:"mediaRow"});

	let mediaDescription:HTMLParagraphElement = createTextElement({
		text:data.description,
		className:"mediaDescription"
	});
	let mediaCont:any = await createAudioCont(data.media as AudioInterface);

	// Create elements to display a controllable border around other elements
	let mediaDescriptionBorder:HTMLDivElement = createElement({className:"borderLeft"});
	let mediaContBorder:HTMLDivElement = createElement({className:"borderRight"});

	cont.appendChild(mediaDescription);
	cont.appendChild(mediaCont);
	cont.appendChild(mediaDescriptionBorder);
	cont.appendChild(mediaContBorder);

	document.body.appendChild(cont);
}

const loadVideoRow = async (data:RowInterface):Promise<any> => {
	let cont:HTMLDivElement = createElement({className:"mediaRow"});

	let mediaDescription:HTMLParagraphElement = createTextElement({text:data.description,className:"mediaDescription"});
	let mediaCont:any = await createVideoCont(data.media as VideoInterface);

	// Create elements to display a controllable border around other elements
	let mediaDescriptionBorder:HTMLDivElement = createElement({className:"borderRight"});
	let mediaContBorder:HTMLDivElement = createElement({className:"borderLeft"});

	cont.appendChild(mediaCont);
	cont.appendChild(mediaDescription);
	cont.appendChild(mediaDescriptionBorder);
	cont.appendChild(mediaContBorder);

	document.body.appendChild(cont);
}

const loadCanvasWave = ():void => {
	let cvs:HTMLCanvasElement = createElement({element:"canvas",className:"waveDivider"});
	cvs.height = 115;
	let ctx:any = cvs.getContext('2d');

	const y_axis:number = 60;
	let startPoint = {
		x:10,
		y:y_axis
	};
	let endPoint = {
		x:40,
		y:y_axis
	}
	let ctrlPoint = {
		x:25,
		y:125
	}

	ctx.beginPath();
	ctx.moveTo(startPoint.x,startPoint.y);
	ctx.quadraticCurveTo(ctrlPoint.x,ctrlPoint.y,endPoint.x,endPoint.y);
	let i:number = 1;
	do {
		ctrlPoint.y = y_axis + (i%2 === 0 ? 65 : -65);	

		startPoint.x = endPoint.x;
		endPoint.x += 30;

		ctrlPoint.x += 30;

		ctx.moveTo(startPoint.x,startPoint.y);
		ctx.quadraticCurveTo(ctrlPoint.x,ctrlPoint.y,endPoint.x,endPoint.y);

		i++;
	} while(i < 9);

	ctx.strokeStyle = "#f0edee";
	ctx.stroke();

	document.body.appendChild(cvs);
}

export { loadBootstrap, loadAudioRow, loadVideoRow, loadCanvasWave }