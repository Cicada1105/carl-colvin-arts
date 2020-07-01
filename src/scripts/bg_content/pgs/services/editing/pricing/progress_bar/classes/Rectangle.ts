// Rectangle class to be used 

// Imports
import { createElement } from '../../../../../../../global/methods'

class Rectangle {
	private cvs:HTMLCanvasElement;
	private ctx:any;

	private x:number = 0;
	private y:number = 50;
	private width:number = 300;
	private height:number = 50;

	constructor() {
		this.cvs = createElement({
			element: "canvas",
			className: "redProgressRect"
		});
		this.ctx = this.cvs.getContext('2d');
	}
	public draw():void {
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	public fill():void {
		// Clear rectangle
		this.ctx.clearRect(this.x, this.y, this.width, this.height);
		// Style fill color
		this.ctx.fillStyle = "rgba(222, 87, 87, 1)";
		// Draw rectangle
		this.draw();
	}
	public unfill():void {
		// Clear rectangle
		this.ctx.clearRect(this.x, this.y, this.width, this.height);
		// Style fill color 
		this.ctx.fillStyle = "rgba(222, 87, 87, 0)";
		// Draw rectangle
		this.draw();
	}
	// Getter for canvas element
	get canvas():HTMLCanvasElement {
		return this.cvs;
	}
}

export { Rectangle }