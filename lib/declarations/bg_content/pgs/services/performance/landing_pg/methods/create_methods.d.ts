import { CircleInterface as ICircle, LineInterface as ILine, TextInterface as IText, PathInterface as IPath, SVGImageInterface as ISVGImage } from '../interfaces';
declare const createSVGCircle: (data: ICircle) => SVGCircleElement;
declare const createSVGLine: (data: ILine) => SVGLineElement;
declare const createSVGText: (data: IText) => SVGTextElement;
declare const createSVGPath: (data: IPath) => SVGPathElement;
declare const createSVGImage: (data: ISVGImage) => SVGImageElement;
export { createSVGCircle, createSVGLine, createSVGText, createSVGPath, createSVGImage };
