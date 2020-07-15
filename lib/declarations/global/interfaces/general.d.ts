interface ImageInterface {
    path: string;
    alt: string;
    caption?: string;
}
interface ImageLinkInterface extends ImageInterface {
    link: string;
}
interface ILink {
    name: string;
    link: string;
    subdirectories: ILink[] | null;
}
interface IBox {
    header: string;
    content: string | any;
}
interface IBoxLink extends IBox {
    link: string;
}
interface EventListener {
    (event: any): void;
}
export { ImageInterface as IImage, ImageLinkInterface as IImageLink, ILink, IBox, IBoxLink, EventListener };
