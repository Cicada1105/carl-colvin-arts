// This files creates the gradient effect that will be displayed on every page
// Imports
// global
import { createElement } from '@global/methods/elements'

const createGradient = ():void => {
	let cvsEl:HTMLCanvasElement = createElement({element:'canvas',idName:'bgCanvas'});
	document.body.appendChild(cvsEl);

  // const cvs:HTMLCanvasElement = document.getElementById("bgCanvas") as HTMLCanvasElement;

	let ctx:CanvasRenderingContext2D = cvsEl.getContext('2d') as CanvasRenderingContext2D;
	let grd:CanvasGradient = ctx.createLinearGradient(0,0,300,150);

	// Create color stops
	grd.addColorStop(0,"#340604");
	grd.addColorStop(1,"black");

	ctx.fillStyle = grd;
	ctx.fillRect(0,0,300,150);
}

export { createGradient }