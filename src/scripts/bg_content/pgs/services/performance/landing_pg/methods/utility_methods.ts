/*
	This file contains methods for setting optional attributes of SVG Elements
	to prevent repetition within create_methods.ts
*/
// Imports
import { 
	SVGGraphicsInterface as IGraphics,
	TimingAttributesInterface as ITiming,
	PrimitiveAttributesInterface as IPrimitive,
	CoreAttributesInterface as ICore,
	SetInterface as ISet,
	AnimateInterface as IAnimate,
	AnimationElements
} from '../interfaces';

function setSVGGraphicsAttributes<T extends SVGElement,U extends IGraphics>(el:T,data:U):void {
	data.fill && el.setAttribute("fill",data.fill);
	data.fillOpacity && el.setAttribute("fill-opacity",data.fillOpacity);
	data.stroke && el.setAttribute("stroke",data.stroke);
	data.strokeWidth && el.setAttribute("stroke-width",data.strokeWidth);
	data.strokeOpacity && el.setAttribute("stroke-opacity",data.strokeOpacity);
}
function setSVGTimingAttributes<T extends SVGElement,U extends ITiming>(el:T,data:U):void {
	data.from && el.setAttribute("from",data.from);
	data.to && el.setAttribute("to",data.to);
	data.begin && el.setAttribute("begin",data.begin);
	data.end && el.setAttribute("end",data.end);
	data.fill && el.setAttribute("fill",data.fill);
	data.dur && el.setAttribute("dur",data.dur);
}
function setPrimitiveAttributes<T extends SVGElement,U extends IPrimitive>(el:T,data:U):void {
	data.x && el.setAttribute("x",data.x);
	data.y && el.setAttribute("y",data.y);
	data.width && el.setAttribute("width",data.width);
	data.height && el.setAttribute("height",data.height);
}
function setCoreAttributes<T extends HTMLElement | SVGElement,U extends ICore>(el:T,data:U):void {
	data.idName && el.setAttribute("id",data.idName);
	data.className && el.setAttribute("class",data.className);
}

function setAnimationElements<T extends SVGElement>(el:T,data:AnimationElements):void {
	if ((data as IAnimate[])[0].idName) {
		let animations:IAnimate[] = <IAnimate[]>data;

		animations.forEach(animation => el.appendChild(createSVGAnimate(animation)));
	}
	else {
		let sets:ISet[] = <ISet[]>data;

		sets.forEach(set => el.appendChild(createSVGSet(set)));
	}
}

const createSVGSet = (data:ISet):SVGAnimationElement => {
	let set:SVGAnimationElement = <SVGAnimationElement>document.createElementNS("http://www.w3.org/2000/svg","set");

	// Set attribute name to be changed by set element 
	set.setAttribute("attributeName",data.attributeName);

	// Add additional SVG Timing attributes if provided
	setSVGTimingAttributes(set,data);

	return set;
}
const createSVGAnimate = (data:IAnimate):SVGAnimateElement => {
	let animate:SVGAnimateElement = <SVGAnimateElement>document.createElementNS("http://www.w3.org/2000/svg","animate");

	// Set attribute name to be changed by animate element
	animate.setAttribute("attributeName",data.attributeName);

	// Add additional SVG Timing attributes if provided
	setSVGTimingAttributes(animate,data);
	// Add additional Core attributes if provided
	setCoreAttributes(animate,data);

	return animate;
}

export {
	setSVGGraphicsAttributes,
	setSVGTimingAttributes,
	setPrimitiveAttributes,
	setCoreAttributes,
	setAnimationElements
}