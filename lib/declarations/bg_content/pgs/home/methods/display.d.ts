import { IBox } from '../../../../global/interfaces/general';
declare const storeCurrentImage: (image: HTMLImageElement, data: IBox<string>) => void;
declare const displayImagePost: (img: HTMLImageElement, postData: IBox<string>) => void;
export { displayImagePost, storeCurrentImage };
