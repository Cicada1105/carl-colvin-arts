import { CircleInterface as ICircle, LineInterface as ILine, PathInterface as IPath, SVGImageInterface as ISVGImage, ISector } from './interfaces';
interface DimensionsInterface {
    [index: string]: ICircle[] | ILine[] | IPath[];
}
declare const centerImagesData: ISVGImage[];
declare const sectorData: ISector[];
declare const graphicsAttributes: DimensionsInterface;
export { centerImagesData, sectorData, graphicsAttributes };
