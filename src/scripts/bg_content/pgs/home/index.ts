// Imports
import { infoData, imgData } from './data'
import { IImage, IBox } from '../../../global/interfaces'

const loadHomePage = () => {
	infoData.forEach(infoBox);
	imgData.forEach(imgCont);
}

const infoBox = (e:IBox):void => {
	let box = document.createElement('section');

	let h = document.createElement('h3');
	let hText = document.createTextNode(e.header);
	h.appendChild(hText);

	// Sections contain articles
	let c = document.createElement('article');
	let cText = document.createTextNode(e.content);
	c.appendChild(cText);

	box.appendChild(h);
	box.appendChild(c);

	document.body.appendChild(box);
}

const imgCont = (currImg:IImage) => {
	// HTML figure contains image and caption
	let fig = document.createElement('figure');

	let img = document.createElement('img');
	img.setAttribute('src',currImg.path);
	img.setAttribute('alt',currImg.alt);

	let figCaption = document.createElement('figcaption');
	let figCaptionTxt = document.createTextNode("");
	figCaption.appendChild(figCaptionTxt);

	fig.appendChild(img);
	fig.appendChild(figCaption);

	document.body.appendChild(fig);
}
export { loadHomePage }