import { CircleInterface as ICircle, LineInterface as ILine, TextInterface as IText, PathInterface as IPath, FilterElementInterface as IFilter, FilteredImageInterface as IFilteredImage, GaussianBlurInterface as IGaussian } from '../interfaces';
declare const createSVGCircle: (data: ICircle) => SVGCircleElement;
declare const createSVGLine: (data: ILine) => SVGLineElement;
declare const createSVGText: (data: IText) => SVGTextElement;
declare const createSVGPath: (data: IPath) => SVGPathElement;
declare const createSVGFilter: <T extends IGaussian>(data: IFilter<T>) => SVGFilterElement;
declare const createFeGaussianBlur: (data: IGaussian) => SVGFEGaussianBlurElement;
declare const createSVGImage: (data: IFilteredImage) => SVGImageElement;
export { createSVGCircle, createSVGLine, createSVGText, createSVGPath, createSVGFilter, createFeGaussianBlur, createSVGImage };
