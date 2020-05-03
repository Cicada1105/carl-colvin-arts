// Special methods used by the Performance page
// Can be used by methods specified in load_methods.ts

// Imports
// interfaces
import { ICustomContainer, ImageHeaderInterface as IHeader, IBody } from './interfaces'
// methods
import { createElement, createTextElement, createImageElement } from '../../../../global/methods'
// classes
import CurtainRod from './curtain_class'

// Methods will take in an object of type ImageHeaderInterface
// Returns relative container with proper designed
const createSection = (headerData:ICustomContainer):void => {
	// Container to hold every element of the header
	let cont:any = createElement({className:"sectionCont"});

	// Create header and body of performance section
	let headerCont:any = createImageHeader(<IHeader>headerData.header);
	let dataCont:any = createContent(<IBody>headerData.body);

	// Append elements to parent container
	cont.appendChild(headerCont);
	cont.appendChild(dataCont);

	// Apend Container to document
	document.body.appendChild(cont);
}

const createContent = (body:IBody):any => {
	// Creating an additional container will allow for easy styling
	let cont:any = createElement({
		className:"bodyCont",
	});
	let stageCont:any = createElement({
		className:"stage"
	});
	let text:any = createTextElement({
		text:body.content,
		className:"bodyText"
	});
	let stageFrontCont:any = createElement({
		className:"stageFront"
	});
	let curtainCont:any = createCurtain();

	// Append text to stage container
	stageCont.appendChild(text);

	// Append stage front and stage to container
	cont.appendChild(stageCont);
	cont.appendChild(stageFrontCont);
	cont.appendChild(curtainCont);

	return cont;
}
const activateCurtains = () => {
	// Locate curtains
	let curtains = document.getElementsByClassName("curtains");
	// Page loading will mimic the click event
	let clickEvent = new Event("click");

	// Activate click event for each curtain container
	for (let val of curtains) {
		val.dispatchEvent(clickEvent);
	}
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
	/*cont.addEventListener("mouseover",() => {
		if ((cont.style.animationPlayState !== "running") && (cont.style.animationName === "curtainClose" || cont.style.animationName === "")){
			console.log("Opening");
			cont.style.animationName = "curtainOpen";
			cont.style.animationPlayState = "running";
		}
	});
	cont.addEventListener("mouseout", () => {
		if ((cont.style.animationPlayState !== "running") && (cont.style.animationName === "curtainOpen")){
			console.log("Closing");
			cont.style.animationName = "curtainClose";
			cont.style.animationPlayState = "running";
		}
	})*/
	cont.addEventListener("animationend",() => {
		cont.style.animationPlayState = "paused";
	})

	return cont;
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
export { createSection, activateCurtains }