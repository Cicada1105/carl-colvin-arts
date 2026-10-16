// This file holds the load methods for the individual
// 	sections on the performance page

// Imports
// 	Methods
import { 
	createSVGText, createSVGLine, createSVGCircle, 
	createSVGPath, createSVGArrow, createSVGImage
} from './create_methods';
//	Event Handlers
import { init } from './event_listeners';
//	Data
import { centerImagesData, sectorData, graphicsAttributes } from '../data';
//	Interfaces
//	 Local
import {
	CircleInterface as ICircle,
	LineInterface as ILine,
	PathInterface as IPath,
	TextInterface as IText,
	SVGImageInterface as ISVGImage,
	ISector
} from '../interfaces';
//	 Global
import { IImage } from '@global/interfaces/general';

const loadSVG = function():void {
	// Get and store svg context
	const svg:SVGSVGElement = <SVGSVGElement>this;

	/* Handle creation of children elements */
	// Create static content: circle, lines, cener image
	//	Create circles
	let circles:Array<ICircle> = <ICircle[]>graphicsAttributes["circles"];
	circles.forEach((circle:ICircle) => svg.appendChild(createSVGCircle(circle)));
	//	Create lines connecting outter circle to inner circle
	let lines:Array<ILine> = <ILine[]>graphicsAttributes["lines"];
	lines.forEach((line:ILine) => svg.appendChild(createSVGLine(line)));
	// 	Create center image
	centerImagesData.forEach((imageData:ISVGImage) => svg.appendChild(createSVGImage(imageData)));
	// 	Create each sector
	sectorData.forEach((sector:ISector) => {
		loadSector.bind({
			svgElement: svg,
			sectorData:sector
		})();
	});
}

const loadSector = function():void {
	// Store value of 'this'
	const that:any = this;
	// Store 'this' data to be passed onto path
	//	SVG Element needs to be passed down through components
	const svg:SVGSVGElement = <SVGSVGElement>that.svgElement;
	const data:ISector = <ISector>that.sectorData;
	const sectorPageLink:string = data.link;
	const imageSrc:IImage = <IImage>data.image;

	// Group contents of this sector into a group
	const sectorGroup:SVGGElement = document.createElementNS("http://www.w3.org/2000/svg","g");

	// Create header for the sector and append it
	let header:SVGTextElement = createSVGText(data.sectorHeader);
	sectorGroup.appendChild(header);
	// Create underline for the sector header and append it to the sector
	let underline:SVGLineElement = createSVGLine(data.underline);
	sectorGroup.appendChild(underline);
	// Loop through and create the descriptions of current sector, appending each one
	data.descriptions.forEach((description:IText) => {
		let descr:SVGTextElement = createSVGText(description);
		sectorGroup.appendChild(descr);
	});

	// Create svg path
	let path:SVGPathElement = createSVGPath(data.sectorPath);
	// Bind 'this' of init to svg parent	; Binding function does not call function so must bbe invoked with "()"
	const EventHandlers:any = init.bind(svg)();
	path.addEventListener("mouseover",EventHandlers.MouseoverHandler.bind({
		sector:sectorGroup,
		sectorPageLink,
		imageSrc
	}));
	path.addEventListener("mouseout",EventHandlers.MouseoutHandler.bind({
		sector:sectorGroup,
		sectorPageLink
	}));
	sectorGroup.appendChild(path);

	// Loop through and create the descriptions to be displayed when the user hovers over sector
	//	append each description to sector
	data.hoverHeader.forEach((header:IText) => sectorGroup.appendChild(createSVGText(header)));
	// Create arrow SVG path and append to sector
	sectorGroup.appendChild(createSVGArrow(data.arrow));

	// Append the current sector group to the svg
	svg.appendChild(sectorGroup);
}

export { loadSVG }