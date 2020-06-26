// Circle class to be used by "progress bar" for pricing

// Imports
import { createElement } from '../../../../../global/methods'

class Circle {
	private cvs:HTMLCanvasElement;
	private ctx:any;

	private x:number = 150;
	private y:number = 75;
	private radius:number = 65;
	private start:number = 0;
	private end:number = 2 * Math.PI;

	constructor() {
		this.cvs = createElement({
			element: "canvas",
			className: "progressCircle"
		});
		this.ctx = this.cvs.getContext("2d");
	}

	public draw():void {
		// Style path
		this.ctx.strokeStyle = "#f0edee";
		this.ctx.lineWidth = 15;

		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.radius, this.start, this.end);
		this.ctx.stroke();
	}
	public fill():void {
		// Clear rectangle if previously drawn
		this.ctx.clearRect(0,0,this.cvs.width, this.cvs.height);
		// Redraw Circle
		this.draw();

		// Style fill color
		this.ctx.fillStyle = "rgba(222, 87, 87, 1)";

		this.ctx.fill();
	}
	public unfill():void {
		// Clear rectangle if previously drawn
		this.ctx.clearRect(0,0,this.cvs.width, this.cvs.height);
		// Redraw Circle
		this.draw();

		// Style fill color to have complete transparency
		this.ctx.fillStyle = "rgba(222, 87, 87, 0)";

		this.ctx.fill();
	}

	// Getter for adding canvas dynamically to document
	get canvas():HTMLCanvasElement {
		return this.cvs;
	}
}

export { Circle }