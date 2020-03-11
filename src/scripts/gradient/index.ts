// This files creates the gradient effect that will be displayed on every page
// Imports
// global
import { createElement } from '../global/methods'

const createGradient = ():void => {
	let cvsEl:any = createElement({element:'canvas',idName:'bgCanvas'});
	document.body.appendChild(cvsEl);

  	const cvs:any = document.getElementById("bgCanvas");

	let ctx = cvs.getContext('2d');
	let grd = ctx.createLinearGradient(0,0,300,150);

	// Create color stops
	grd.addColorStop(0,"#340604");
	grd.addColorStop(1,"black");

	ctx.fillStyle = grd;
	ctx.fillRect(0,0,300,150);
}

export { createGradient }