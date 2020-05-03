declare const getCurrentFile: () => string;
declare function createElement({ element, className, idName }: {
    element?: string | undefined;
    className?: string | undefined;
    idName?: string | undefined;
}): any | void;
declare function createTextElement({ element, text, ...rest }: {
    [x: string]: any;
    element?: string | undefined;
    text?: string | undefined;
}): any | void;
declare function createImageElement({ src, alt, ...rest }: {
    [x: string]: any;
    src?: string | undefined;
    alt?: string | undefined;
}): any;
declare const loadBootstrap: () => void;
export { getCurrentFile, createElement, createTextElement, createImageElement, loadBootstrap };
