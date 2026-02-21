import { IImage, IBox } from '@global/interfaces/general';
interface ICollageImage extends IImage {
    idName: string;
}
interface ICollageBox extends IBox<string> {
    path: string;
}
interface IPost {
    imageData: ICollageImage;
    postData: ICollageBox;
}
interface IPostData {
    img: HTMLImageElement;
    postData: ICollageBox;
}
export { ICollageImage, IPost, IPostData, ICollageBox };
