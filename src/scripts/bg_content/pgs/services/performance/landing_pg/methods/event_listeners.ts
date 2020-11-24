// File for handling events of the performance landing page

// Imports
import { IImage } from '../../../../../../global/interfaces/general';

// Interface that allows for use of beginElement method on SVGAnimateElement's
interface SVGAnimationTransform extends SVGAnimationElement {
	beginElement():SVGElement;
	endElement():SVGElement;
}

export function init() {
//	Store value of 'this' which is bounded as the svg parent element
	const svg:SVGSVGElement = <SVGSVGElement>this;
	// DOM Constants
	const center_img:SVGImageElement = <SVGImageElement>svg.getElementsByTagName("image")[0];
	const center_img_default:SVGImageElement = <SVGImageElement>svg.getElementsByTagName("image")[1];
	const lgCircle:SVGCircleElement = <SVGCircleElement>svg.getElementsByTagName("circle")[0];
	const smCircle:SVGCircleElement = <SVGCircleElement>svg.getElementsByTagName("circle")[1];
	const arrows:HTMLCollection = document.getElementsByClassName("arrow");

	// Numeric constaants
	//SVG_PROPS.init();
	const BASE_ARROW_FONT_SIZE:number = 1.2178619756427604; // 3 / 2.4633333333333334 => scaling from 300x300 canvase to browser size that =
	/* Multiply svg coordinates by SVG_CONVERSION to get actual screen pixels*/
	//   svg is always 300x300, so coordinates need to be converted based on screen size
	let svgCTM:DOMMatrix = <DOMMatrix>svg.getCTM();
	let SVG_CONVERSION:number = svgCTM.a;

	/*OVERWRITTEN DATA*/
	let text1:SVGTextElement, text2:SVGTextElement;
	let setFillSector:SVGAnimationTransform;
	let distance:number;
	let sectorLink:string;
	/*EVENT HANDLER*/
	const sectorClickHandler:()=>void = () => {
		window.open(sectorLink,"_top");
	}
	return {
		MouseoverHandler: function(e:any) {
			if ((e.relatedTarget) && ((e.relatedTarget.localName === "i") || (e.relatedTarget.localName === "text"))) {
				/* Exiting from arrow, entering over sector */
			}
			else {
				// Store value of 'this'
				const that:any = this;
				const sector:SVGPathElement = <SVGPathElement>that.sector;
				const arrowNum:number = <number>(that.arrow["num"]);
				sectorLink = <string>(that.arrow["link"]);
				const imageLink:IImage = <IImage>that.imageSrc;
				//	Access text
				text1 = <SVGTextElement>sector.nextElementSibling;
				text2 = <SVGTextElement>text1.nextElementSibling;

				center_img_default.style.animationName = "blurImage";
				center_img.style.animationName = "unBlurImage";

				setFillSector = <SVGAnimationTransform>sector.firstElementChild;
				setFillSector.beginElement();

				center_img.setAttribute("href",imageLink.path);
				center_img.setAttribute("alt",imageLink.alt);

				//	Display text
				text1.style.display = "block";
				text2.style.display = "block";
				// Add click listener to to direct user to respective page
				text1.addEventListener("click", sectorClickHandler, {
					once: true
				});
				text2.addEventListener("click", sectorClickHandler, {
					once: true
				});
				// Display arrow
				let arrow:HTMLElement = <HTMLElement>arrows[arrowNum];
				//   Update svg conversion
				svgCTM = <DOMMatrix>svg.getCTM();
				SVG_CONVERSION = svgCTM.a;
				arrow.style.fontSize = `${SVG_CONVERSION * BASE_ARROW_FONT_SIZE}rem`;
				arrow.style.display = "initial";
				// Add click listener to to direct user to respective page
				arrow.addEventListener("click", sectorClickHandler, { 
					once: true
				});
			}
		},
		MouseoutHandler: function(e:any) {
			if ((e.relatedTarget) && ((e.relatedTarget.localName === "i") || (e.relatedTarget.localName === "text"))) {
				/* Hovering over arrow or hover text */
			}
			else {
				// Store value of 'this'
				const that:any = this;
				const sector:SVGPathElement = <SVGPathElement>that.sector;
				const arrowNum:number = <number>that.arrow["num"];
				sectorLink = <string>that.arrow["link"];

				//	Access text
				text1 = <SVGTextElement>sector.nextElementSibling;
				text2 = <SVGTextElement>text1.nextElementSibling;

				//   Update svg conversion
				svgCTM = <DOMMatrix>svg.getCTM();
				SVG_CONVERSION = svgCTM.a;
				
				center_img_default.style.animationName = "unBlurImage";
				center_img.style.animationName = "blurImage";

				setFillSector = <SVGAnimationTransform>sector.lastElementChild;
				setFillSector.beginElement();

				// Remove current displayed arrow
				let arrow:HTMLElement = <HTMLElement>arrows[arrowNum];
				arrow.style.display = "none";
				// Remove arrow click listener
				arrow.removeEventListener("click",sectorClickHandler,false);
				//	Remove text
				text1.style.display = "none";
				text2.style.display = "none";
				// Remove text click listeners
				text1.removeEventListener("click", sectorClickHandler, false);
				text2.removeEventListener("click", sectorClickHandler, false);
			}
		}
	};
}