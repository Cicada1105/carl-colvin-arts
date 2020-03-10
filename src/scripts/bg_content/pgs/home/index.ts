// Imports
import { infoData, imgData } from './data'
import { IImage, IBox } from '../../../global/interfaces'

const loadHomePage = () => {
	let numDataRows:number = infoData.length;
	let currBox:any;
	let currImg:any;

	for (let i = 0; i < numDataRows; i++) {
		currBox = infoBox(infoData[i]);
		currImg = imgCont(imgData[i]);

		let dataRow:any = document.createElement('div');
		dataRow.setAttribute('class','row');
		// Alternate info boxes and images
		if (i % 2 == 0) {
			currBox.setAttribute('id','left');
			currImg.setAttribute('id','right');
		}
		else {
			currImg.setAttribute('id','left');
			currBox.setAttribute('id','right');
		}
		dataRow.appendChild(currBox);
		dataRow.appendChild(currImg);

		// Append each row to the page
		document.body.appendChild(dataRow);
	}
}

const infoBox = (e:IBox):any => {
	let box = document.createElement('section');

	let h = document.createElement('h3');
	let hText = document.createTextNode(e.header);
	h.appendChild(hText);

	// Sections contain articles
	let c = document.createElement('p');
	let cText = document.createTextNode(e.content);
	c.appendChild(cText);

	box.appendChild(h);
	box.appendChild(c);

	return box;
}

const imgCont = (currImg:IImage):any => {
	// HTML figure contains image and caption
	let fig:any = document.createElement('div');
	fig.setAttribute('class','figure');

	// Image to display within circular design
	let img:any = document.createElement('img');
	img.setAttribute('src',currImg.path);
	img.setAttribute('alt',currImg.alt);
	img.setAttribute('class', 'homeImg');

	// Circular border to add depth to image
	let imgBorder:any = document.createElement('img');
	imgBorder.setAttribute('src','./resources/home_imgs/img_border.png');
	imgBorder.setAttribute('class','imgBorder');

	let figCaption = document.createElement('div');
	figCaption.setAttribute('class','figcaption');

	let figCaptionP = document.createElement('p');
	let figCaptionStr:string = typeof currImg.caption === "undefined" ? "" : currImg.caption;
	let figCaptionTxt = document.createTextNode(figCaptionStr);

	// On hovering over imgBorder, fade img itself
	imgBorder.addEventListener('mouseover',() => {
		img.style.filter = 'opacity(50%)';
		figCaption.style.display = 'block';
		
	});
	// On leaving image, img has full opacity
	imgBorder.addEventListener('mouseout',() => {
		img.style.filter = 'opacity(100%)';
		figCaption.style.display = 'none';
	});

	// Append caption text to paragraph
	figCaptionP.appendChild(figCaptionTxt);
	// Append paragraph to caption container
	figCaption.appendChild(figCaptionP)

	fig.appendChild(img);
	fig.appendChild(imgBorder);
	fig.appendChild(figCaption);

	return fig;
}
export { loadHomePage }