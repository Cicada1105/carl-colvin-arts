// These methods will be shared by the progress bar methods and the pricing inputs methods
// Imports
import { progressCircles as circles, progressRectangles as rectangles, currentProgress as currPos } from '../data/dynamic';
let pos = currPos;
const Next = () => {
    if (pos < (circles.length - 1)) {
        rectangles[pos].fill();
        pos++;
        circles[pos].fill();
    }
};
const Previous = (goToPos) => {
    for (let updatePos = pos; updatePos > goToPos; updatePos--) {
        circles[pos].unfill();
        pos--;
        rectangles[pos].unfill();
    }
};
export { Next, Previous };
