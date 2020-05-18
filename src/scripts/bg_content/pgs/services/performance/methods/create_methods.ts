/*
	This file contains methods that are used in the creation of
	general elements on the page that are used multiple times.
	Used by the load_methods.ts script
*/

// Imports
// interfaces
import { ICustomContainer, ImageHeaderInterface as IHeader, IBody } from '../interfaces'
// methods
import { createElement, createTextElement, createImageElement } from '../../../../../global/methods'
// classes
import CurtainRod from '../curtain_class'

// Methods will take in an object of type ICustomContainer
// Returns relative container with proper designed
const createSection = (headerData:ICustomContainer):void => {
	// Container to hold every element of the header
	let cont:any = createElement({className:"sectionCont"});

	// Create header and body of performance section
	let headerCont:any = createImageHeader(<IHeader>headerData.header);
	let dataCont:any = createStage(<IBody>headerData.body);

	// Append elements to parent container
	cont.appendChild(headerCont);
	cont.appendChild(dataCont);

	// Apend Container to document
	document.body.appendChild(cont);
}

const createImageHeader = (headerData:IHeader):any => {
	let cont:any = createElement({className:"centerHeaderCont"});

	// Musical symbol to be display on left side of header
	let leftSymbol:any = createImageElement({
		src:headerData.image.path,
		alt:headerData.image.alt,
		className:"musicalSymbol",
	});
	// Header text to be at the center of the container
	let header:any = createTextElement({
		element:"h3",
		text:headerData.data
	});
	// Musical symbol to be display on right side of header
	let rightSymbol:any = createImageElement({
		src:headerData.image.path,
		alt:headerData.image.alt,
		className:"musicalSymbol"
	});
	
	// Append Header and Symbols to center container
	cont.appendChild(leftSymbol);
	cont.appendChild(header);
	cont.appendChild(rightSymbol);

	return cont;
}

const createStage = (body:IBody):any => {
	// Creating an additional container will allow for easy styling
	let cont:any = createElement({
		className:"bodyCont",
	});

	let stageCont:any = createBody(body.content);

	let stageFrontCont:any = createElement({
		className:"stageFront"
	});

	let curtainCont:any = createCurtain();

	// Append stage front and stage to container
	cont.appendChild(stageCont);
	cont.appendChild(stageFrontCont);
	cont.appendChild(curtainCont);

	return cont;
}
const createBody = (bodyText:string[]):any => {
	const SPACING:number = 32.5;	// rem
	const P_CENTER_POSITIONING = 7.5;	// rem

	let cont:any = createElement({
		className:"stage"
	});

	// Text that is offset to create "slideshow" effect creates additional 
	//	x-axis space; prevent users from "viewing" this additional space
	document.body.style.overflowX = "hidden";

	bodyText.forEach((str,i) => {
		let text:any = createTextElement({
			text:str,
			className:"bodyText"
		});	
		// Offset paragraphs to later be animated in user initiated slideshow
		text.style.left = (P_CENTER_POSITIONING + (SPACING * i)) + "rem";

		// Append text to stage container
		cont.appendChild(text);
	});


	// If there is only one slide, arrows do not need to be rendered
	if (bodyText.length > 1) {

		var leftArrow:any;
		var rightArrow:any;

		const createArrows = (():void => {
			const SPACING:number = 32.5;	// rem
			const P_CENTER_POSITIONING = 7.5;	// rem

			// Create left and right arrows and event listeners to rotate through "slideshow"
			// Keep track of current element/"slide"
			var currentSlide:number = 1;
			var slides:any = cont.querySelectorAll("p");

			leftArrow = createElement({
				element:'i',
				className:'fas fa-chevron-left'
			});

			// Each slide starts at beginning so left arrows are initially hidden
			leftArrow.style.visibility = "hidden";

			leftArrow.addEventListener("click",() => {

				if (currentSlide !== 1) {
					for (let slide of slides) 
						slide.style.left = (parseFloat(slide.style.left) + SPACING) + "rem";

					// Increment current slide
					currentSlide--;
				}

				leftArrow.style.visibility = currentSlide === 1 && "hidden";
				// Moving to the left from last slide displays right arrow
				// Only needed to be applied once
				rightArrow.style.visibility = currentSlide === (slides.length - 1) && "visible";
			});

			rightArrow = createElement({
				element:"i",
				className:"fas fa-chevron-right",
				idName:"rightArrow"
			});

			rightArrow.addEventListener("click",() => {
				if (currentSlide !== slides.length) {
					for (let slide of slides) 
						slide.style.left = (parseFloat(slide.style.left) - SPACING) + "rem";

					// Increment current slide
					currentSlide++;
				}
				rightArrow.style.visibility = currentSlide === slides.length && "hidden";
				// Moving to the right from first slide displays left arrow
				// Only needed to be applied once
				leftArrow.style.visibility = currentSlide === 2 && "visible";
			});
		})();

		// Append left and right arrows to container
		cont.appendChild(leftArrow);
		cont.appendChild(rightArrow);
	}

	return cont;
}
const createCurtain = ():any => {
	let cont:any = createElement({
		element:"canvas",
		className:"curtains"
	});

	let ctx:any = cont.getContext("2d");

	let row_widths:Array<number> = [2, 10, 16, 2, 5, 13, 2, 5, 13, 2, 13, 
									2, 10, 16, 2, 5, 13, 2, 5, 13, 2, 13, 
									2, 10, 16, 2, 5, 13, 2, 5, 13, 2, 13, 
									2, 10, 16, 2, 5, 13, 2, 5];

	// keep track of current position on x-axis
	let curr_pos:number = 0;
	row_widths.forEach(width => {
		let rod:any = new CurtainRod(ctx,width, curr_pos);
		// Increment curr_pos based on width of current width
		curr_pos += width;
		rod.draw();
	});

	cont.addEventListener("click",() => {
		let animationName:string = cont.style.animationName;

		if(cont.style.animationPlayState !== "running") {
			cont.style.animationName = ((animationName === "curtainClose") || (animationName === "")) ? "curtainOpen" : "curtainClose";
			cont.style.animationPlayState = "running";
		}
	});
	cont.addEventListener("animationend",() => cont.style.animationPlayState = "paused");

	return cont;
}
export { createSection }