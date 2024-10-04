import { IImage, IBoxLink } from '../../../global/interfaces/general';
declare const infoBox: (e: IBoxLink<string>) => HTMLElement;
declare const imgCont: (currImg: IImage) => HTMLElement;
export { infoBox, imgCont };
