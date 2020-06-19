// This file contains methods that are in addition to the load methods
// 	or aid in the processing of the load methods

// Imports
// interfaces
import { IImage, IBoxLink } from '../../../global/interfaces'
// methods
import { createElement, createTextElement, createImageElement } from '../../../global/methods'

// Path for development
let isHomePage:boolean = window.location.pathname.includes('index');
const IMAGE_DIR:string = (isHomePage ? './' : '../') + "resources/pg_imgs/about_imgs/";
// Paths for production
//const IMAGE_DIR:string = '/resources/pg_imgs/about_imgs/'

const infoBox = (e:IBoxLink):HTMLElement => {
	let box:HTMLElement = document.createElement('section');

	let h:HTMLHeadingElement = createTextElement({element:'h3',text:e.header});

	// Add event listener to header to redirect user to specific page
	h.addEventListener("click", () => {
		window.open(e.link,"_self");
	});

	// Sections contain articles/paragraphs
	// createTextElement's default element is 'p'
	let c:HTMLParagraphElement = createTextElement({text:e.content});

	box.appendChild(h);
	box.appendChild(c);

	return box;
}

const imgCont = (currImg:IImage):HTMLDivElement => {
	// Create container to store the figure/image, border and data
	// createElement's default element is 'div'
	let fig:any = createElement({className:'figure'});

	// Image to display
	let img:HTMLImageElement = createImageElement({src:currImg.path,alt:currImg.alt,className:'homeImg'});

	// Circular border to add depth to image
	let imgBorder:HTMLImageElement = createImageElement({src:`${IMAGE_DIR}img_border.png`,className:'imgBorder'});

	let figCaption:HTMLDivElement = createElement({className:'figcaption'});

	// Data to display when user hovers over the image
	let figCaptionStr:string = typeof currImg.caption === "undefined" ? "" : currImg.caption;
	let figCaptionP:HTMLParagraphElement = createTextElement({text:figCaptionStr});

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