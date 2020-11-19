import { CircleInterface as ICircle, LineInterface as ILine, PathInterface as IPath, FilteredImageInterface as IFilteredImage, ISector } from './interfaces';
interface DimensionsInterface {
    [index: string]: ICircle[] | ILine[] | IPath[];
}
declare const centerImagesData: IFilteredImage[];
declare const sectorData: ISector[];
declare const graphicsAttributes: DimensionsInterface;
export { centerImagesData, sectorData, graphicsAttributes };
