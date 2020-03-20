// This file contains methods that are in addition to the load methods
// 	or aid in the processing of the load methods

// Imports
// interfaces
import { IImage, IBox } from '../../../global/interfaces'
// methods
import { createElement, createTextElement, createImageElement } from '../../../global/methods'

const IMAGE_DIR:string = './resources/home_imgs/';

const infoBox = (e:IBox):any => {
	let box = document.createElement('section');

	let h:any = createTextElement({element:'h3',text:e.header});

	// Sections contain articles/paragraphs
	// createTextElement's default element is 'p'
	let c:any = createTextElement({text:e.content});

	box.appendChild(h);
	box.appendChild(c);

	return box;
}

const imgCont = (currImg:IImage):any => {
	// Create container to store the figure/image, border and data
	// createElement's default element is 'div'
	let fig:any = createElement({className:'figure'});

	// Image to display
	let img:any = createImageElement({src:currImg.path,alt:currImg.alt,className:'homeImg'});

	// Circular border to add depth to image
	let imgBorder:any = createImageElement({src:`${IMAGE_DIR}img_border.png`,className:'imgBorder'});

	let figCaption = createElement({className:'figcaption'});

	// Data to display when user hovers over the image
	let figCaptionP:any;
	let figCaptionStr:string = typeof currImg.caption === "undefined" ? "" : currImg.caption;
	figCaptionP = createTextElement({text:figCaptionStr});

	// On hovering over imgBorder, fade img itself
	// Display data 
	imgBorder.addEventListener('mouseover',() => {
		img.style.filter = 'opacity(50%)';
		figCaption.style.display = 'block';
		
	});
	// On leaving image, img has full opacity
	// Hide data
	imgBorder.addEventListener('mouseout',() => {
		img.style.filter = 'opacity(100%)';
		figCaption.style.display = 'none';
	});

	// Append paragraph to caption container
	figCaption.appendChild(figCaptionP)

	fig.appendChild(img);
	fig.appendChild(imgBorder);
	fig.appendChild(figCaption);

	return fig;
}

export { infoBox, imgCont }