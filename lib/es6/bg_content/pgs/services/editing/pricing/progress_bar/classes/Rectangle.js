// Rectangle class to be used 
// Imports
import { createElement } from '../../../../../../../global/methods/elements';
class Rectangle {
    constructor() {
        this.x = 0;
        this.y = 50;
        this.width = 300;
        this.height = 50;
        this.cvs = createElement({
            element: "canvas",
            className: "redProgressRect"
        });
        this.ctx = this.cvs.getContext('2d');
    }
    draw() {
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    fill() {
        // Clear rectangle
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
        // Style fill color
        this.ctx.fillStyle = "rgba(222, 87, 87, 1)";
        // Draw rectangle
        this.draw();
    }
    unfill() {
        // Clear rectangle
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
        // Style fill color 
        this.ctx.fillStyle = "rgba(222, 87, 87, 0)";
        // Draw rectangle
        this.draw();
    }
    // Getter for canvas element
    get canvas() {
        return this.cvs;
    }
}
export { Rectangle };
