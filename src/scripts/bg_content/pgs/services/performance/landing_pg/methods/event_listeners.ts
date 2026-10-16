// File for handling events of the performance landing page

// Imports
import { IImage } from '@global/interfaces/general';

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
	
	let sectorLink:string;
	/*EVENT HANDLER*/
	const sectorClickHandler:()=>void = () => {
		window.open(sectorLink,"_top");
	}
	return {
		MouseoverHandler: function(e:any) {
			if ((e.relatedTarget) && ((e.relatedTarget.localName === "path") || (e.relatedTarget.localName === "text"))) {
				/* Exiting from arrow, entering over sector */
			}
			else {
				// Store value of 'this'
				const that:any = this;
				const sectorGroup:SVGGElement = <SVGGElement>that.sector;
				const sectorGroupPath:SVGPathElement = <SVGPathElement>sectorGroup.querySelector('path:has(set)');
				const imageLink:IImage = <IImage>that.imageSrc;
				sectorLink = <string>(that.sectorPageLink);

				//	Access text
				let textNodeList:NodeListOf<SVGTextElement> = sectorGroup.querySelectorAll('text.sector_hover');
				let text1:SVGTextElement = textNodeList[0];
				let text2:SVGTextElement = textNodeList[1];

				center_img_default.style.animationName = "blurImage";
				center_img.style.animationName = "unBlurImage";

				let setFillSector:SVGAnimationTransform = <SVGAnimationTransform>sectorGroupPath.firstElementChild;
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
				// Display arrow by retrieving the arrow within this group
				let arrowSVG:SVGElement = <SVGElement>sectorGroup.getElementsByClassName('arrow')[0];
				let arrow:SVGPathElement = <SVGPathElement>arrowSVG.firstElementChild;
				arrow.setAttribute("fill-opacity","1");

				// Add click listener to to direct user to respective page
				arrow.addEventListener("click", sectorClickHandler, { 
					once: true
				});
			}
		},
		MouseoutHandler: function(e:any) {
			if ((e.relatedTarget) && ((e.relatedTarget.localName === "path") || (e.relatedTarget.localName === "text"))) {
				/* Hovering over arrow or hover text */
			}
			else {
				// Store value of 'this'
				const that:any = this;
				const sectorGroup:SVGGElement = <SVGGElement>that.sector;
				const sectorGroupPath:SVGPathElement = <SVGPathElement>sectorGroup.querySelector('path:has(set)');
				// sectorLink = <string>(that.sectorPageLink);

				//	Access text
				let textNodeList:NodeListOf<SVGTextElement> = sectorGroup.querySelectorAll('text.sector_hover');
				let text1:SVGTextElement = textNodeList[0];
				let text2:SVGTextElement = textNodeList[1];
				
				center_img_default.style.animationName = "unBlurImage";
				center_img.style.animationName = "blurImage";

				let setFillSector:SVGAnimationTransform = <SVGAnimationTransform>sectorGroupPath.lastElementChild;
				setFillSector.beginElement();

				// Remove current displayed arrow
				let arrowSVG:SVGElement = <SVGElement>sectorGroup.getElementsByClassName('arrow')[0];
				let arrow:SVGPathElement = <SVGPathElement>arrowSVG.firstElementChild;
				arrow.setAttribute("fill-opacity","0");
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