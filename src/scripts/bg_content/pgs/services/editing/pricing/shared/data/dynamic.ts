// Dynamic data to be used by the editing page

// Imports
//	classes
import { Circle } from '../../progress_bar/classes/Circle'
import { Rectangle } from '../../progress_bar/classes/Rectangle'

let progressCircles:Array<Circle> = [];
let progressRectangles:Array<Rectangle> = [];
let currentProgress:number = 0;

export { progressCircles, progressRectangles, currentProgress }