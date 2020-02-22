interface ImageInterface {
    path: string;
    alt: string;
}
interface ImageLinkInterface extends ImageInterface {
    link: string;
}
interface ILink {
    name: string;
    link: string;
    subdirectories: ILink[] | null;
}
export { ImageInterface as IImage, ImageLinkInterface as IImageLink, ILink };
