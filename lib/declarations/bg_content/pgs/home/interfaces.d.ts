import { IImage, IBox } from '@global/interfaces/general';
interface ICollage extends IImage {
    idName: string;
}
interface IPost {
    imageData: ICollage;
    postData: IBox<string>;
}
interface IPostData {
    img: HTMLImageElement;
    postData: IBox<string>;
}
export { ICollage, IPost, IPostData };
