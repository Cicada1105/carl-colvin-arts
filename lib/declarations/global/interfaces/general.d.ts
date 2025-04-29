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
interface IBox<T> {
    header: string;
    content: T;
}
interface IBoxLink<T> extends IBox<T> {
    link: string;
}
interface EventListener {
    (event: any): void;
}
interface ContactLinkInterface {
    text: string;
    from: string;
    path: string;
    message?: string;
}
export { ImageInterface as IImage, ImageLinkInterface as IImageLink, ILink, IBox, IBoxLink, EventListener, ContactLinkInterface as IContactLink };
