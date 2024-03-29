// These methods will be shared by the progress bar methods and the pricing inputs methods

// Imports
import { 
	progressCircles as circles,
	progressRectangles as rectangles,
	currentProgress as currPos
} from '../data/dynamic'

let pos:number = currPos;
const Next = (goToPos:number) => {
	if (goToPos === pos)
		return;
	else if (goToPos === (pos + 1)) {
		rectangles[pos].fill();
		pos++;
		circles[pos].fill();
	}
	else if (pos > goToPos)
		Previous(goToPos);
}

const Previous = (goToPos:number) => {
	for (let updatePos = pos; updatePos > goToPos; updatePos--) {
		circles[pos].unfill();
		pos--;
		rectangles[pos].unfill();
	}
}

export { Next, Previous }