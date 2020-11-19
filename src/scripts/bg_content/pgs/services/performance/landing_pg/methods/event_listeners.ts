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
	const circle:SVGCircleElement = <SVGCircleElement>svg.getElementsByTagName("circle")[0];
	const arrows:HTMLCollection = document.getElementsByClassName("arrow");
	// Numeric constaants
	const viewBox = svg.viewBox;
	const svgDim = {
		w: viewBox.baseVal.width,
		h: viewBox.baseVal.height
	}
	// Multiply svg coordinates by SVG_CONVERSION to get actual screen pixels
	// svg is always 300x300, so coordinates need to be converted based on screen size
	const SVG_CONVERSION:number = svg.clientWidth / svgDim.w;
	//const offset = (window.innerWidth - svg.clientWidth) / 2;
	const STROKE_WIDTH:number = parseInt(window.getComputedStyle(circle).strokeWidth);
	const OVERLAPPED_STROKE_WIDTH:number = STROKE_WIDTH / 2;
	const SVG_PROPS = {
		centerX: (svgDim.w / 2) * SVG_CONVERSION,
		centerY: (svgDim.h / 2) * SVG_CONVERSION,
		radius: (146 - OVERLAPPED_STROKE_WIDTH) * SVG_CONVERSION
	}
	const BASE_ARROW_FONT_SIZE:number = 1.2178619756427604; // 3 / 2.4633333333333334 => scaling from 300x300 canvase to browser size that =

	let text1:SVGTextElement, text2:SVGTextElement;

	return {
		MouseoverHandler: function(e:any) {
			// Store value of 'this'
			const that:any = this;
			const sector:SVGPathElement = <SVGPathElement>that.sector;
			const arrowNum:number = <number>(that.arrow["num"]);
			const arrowLink:string = <string>(that.arrow["link"]);
			const imageLink:IImage = <IImage>that.imageSrc;
			//	Access text
			text1 = <SVGTextElement>sector.nextElementSibling;
			text2 = <SVGTextElement>text1.nextElementSibling;
			if ((e.relatedTarget) && (e.relatedTarget.localName === "i")) {
				/* Exiting from arrow, entering over sector */
			}
			else {
				//	Display text
				text1.style.display = "block";
				text2.style.display = "block";

				center_img_default.style.animationName = "blurImage";
				center_img.style.animationName = "unBlurImage";

				let setFillSector:SVGAnimationTransform = <SVGAnimationTransform>sector.firstElementChild;
				setFillSector.beginElement();

				center_img.setAttribute("href",imageLink.path);
				center_img.setAttribute("alt",imageLink.alt);

				let svgCTM:DOMMatrix = <DOMMatrix>svg.getCTM();
				let arrow:HTMLElement = <HTMLElement>arrows[arrowNum];
				arrow.style.fontSize = `${svgCTM.a * BASE_ARROW_FONT_SIZE}rem`;
				arrow.style.display = "initial";
				arrow.addEventListener("click", arrowClickHandler.bind(arrowLink));
			}
		},
		MouseoutHandler: function(e:any) {
			// Store value of 'this'
			const that:any = this;
			const sector:SVGPathElement = <SVGPathElement>that.sector;
			const arrowNum:number = <number>(that.arrow["num"]);
			//	Access text
			text1 = <SVGTextElement>sector.nextElementSibling;
			text2 = <SVGTextElement>text1.nextElementSibling;
			if ((e.relatedTarget) && (e.relatedTarget.localName === "i")) {
				/* Hovering over arrow */
				// Prevent sector text from display none
				//	Display text
				text1.style.display = "block";
				text2.style.display = "block";
			}
			else {
				if ((Math.pow(e.offsetY - SVG_PROPS.centerY,2) + Math.pow(e.offsetX - SVG_PROPS.centerX,2)) > Math.pow(SVG_PROPS.radius,2)) 
					center_img_default.style.animationName = "unBlurImage";
				
				center_img.style.animationName = "blurImage";

				let setFillSector:SVGAnimationTransform = <SVGAnimationTransform>sector.lastElementChild;
				setFillSector.beginElement();

				center_img_default.setAttribute("href","../../resources/pg_imgs/performance_imgs/carl_headshot.png");
				center_img.setAttribute("href","");

				// Remove current displayed arrow
				let arrow:HTMLElement = <HTMLElement>arrows[arrowNum];
				arrow.removeEventListener("click",arrowClickHandler);
				arrow.style.display = "none";
				//	Remove text
				text1.style.display = "none";
				text2.style.display = "none";
			}
		}
	};
}
const arrowClickHandler = function():void {
	window.open(this,"_parent");
}