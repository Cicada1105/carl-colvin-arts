// This file holds methods that pertain to the loading of the listen page

// Imports
// 	interfaces
import { AudioInterface, VideoInterface, RowInterface } from './interfaces'
// 	methods
import { createMediaCont } from './methods/create_methods'
import { createElement, createTextElement } from '../../../global/methods'

type Media = AudioInterface | VideoInterface;

const loadMediaRow = async (data:RowInterface):Promise<any> => {
	let cont:HTMLDivElement = createElement({className:"mediaRow"});

	let mediaDescription:HTMLParagraphElement = createTextElement({text:data.description,className:"mediaDescription"});

	let mediaData:Media = (data.media as AudioInterface).image ? <AudioInterface>data.media : <VideoInterface>data.media;
	let mediaCont:any = await createMediaCont(mediaData);

	// Create elements to display a controllable border around other elements
	let mediaLeftBorder:HTMLDivElement = createElement({className:"borderLeft"});
	let mediaRightBorder:HTMLDivElement = createElement({className:"borderRight"});

	cont.appendChild(mediaCont);
	cont.appendChild(mediaDescription);
	cont.appendChild(mediaLeftBorder);
	cont.appendChild(mediaRightBorder);

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

export { loadMediaRow, loadCanvasWave }