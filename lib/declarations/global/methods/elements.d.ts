import { IContactLink } from '../interfaces/general';
declare function createElement({ element, className, idName }: {
    element?: string | undefined;
    className?: string | undefined;
    idName?: string | undefined;
}): any;
declare function createTextElement({ element, text, ...rest }: {
    [x: string]: any;
    element?: string | undefined;
    text?: string | undefined;
}): any;
declare function createLabelElement({ text, forIn, ...rest }: {
    [x: string]: any;
    text?: string | undefined;
    forIn?: string | undefined;
}): any;
declare function createImageElement({ src, alt, ...rest }: {
    [x: string]: any;
    src?: string | undefined;
    alt?: string | undefined;
}): any;
declare const createSelectElement: ({ options, ...rest }: {
    [x: string]: any;
    options?: {}[] | undefined;
}) => any;
declare function createContactLink(data: IContactLink): HTMLDivElement;
export { createElement, createTextElement, createLabelElement, createImageElement, createSelectElement, createContactLink };
