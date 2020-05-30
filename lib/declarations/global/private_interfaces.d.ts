interface Element {
    element?: string;
    className?: string;
    idName?: string;
}
interface TextElementInterface extends Element {
    text: string;
}
interface ImageElementInterface extends Element {
    src: string;
    alt?: string;
}
export { Element, TextElementInterface, ImageElementInterface };
