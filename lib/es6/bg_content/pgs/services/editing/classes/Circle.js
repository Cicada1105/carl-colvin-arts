// Circle class to be used by "progress bar" for pricing
// Imports
import { createElement } from '../../../../../global/methods';
class Circle {
    constructor() {
        this.x = 150;
        this.y = 75;
        this.radius = 65;
        this.start = 0;
        this.end = 2 * Math.PI;
        this.cvs = createElement({
            element: "canvas",
            className: "progressCircle"
        });
        this.ctx = this.cvs.getContext("2d");
    }
    draw() {
        // Style path
        this.ctx.strokeStyle = "#f0edee";
        this.ctx.lineWidth = 15;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, this.start, this.end);
        this.ctx.stroke();
    }
    fill() {
        // Clear rectangle if previously drawn
        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
        // Redraw Circle
        this.draw();
        // Style fill color
        this.ctx.fillStyle = "rgba(222, 87, 87, 1)";
        this.ctx.fill();
    }
    unfill() {
        // Clear rectangle if previously drawn
        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
        // Redraw Circle
        this.draw();
        // Style fill color to have complete transparency
        this.ctx.fillStyle = "rgba(222, 87, 87, 0)";
        this.ctx.fill();
    }
    // Getter for adding canvas dynamically to document
    get canvas() {
        return this.cvs;
    }
}
export { Circle };
