import { SVGGraphicsInterface as IGraphics, TimingAttributesInterface as ITiming, PrimitiveAttributesInterface as IPrimitive, CoreAttributesInterface as ICore, AnimationElements } from '../interfaces';
declare function setSVGGraphicsAttributes<T extends SVGElement, U extends IGraphics>(el: T, data: U): void;
declare function setSVGTimingAttributes<T extends SVGElement, U extends ITiming>(el: T, data: U): void;
declare function setPrimitiveAttributes<T extends SVGElement, U extends IPrimitive>(el: T, data: U): void;
declare function setCoreAttributes<T extends HTMLElement | SVGElement, U extends ICore>(el: T, data: U): void;
declare function setAnimationElements<T extends SVGElement>(el: T, data: AnimationElements): void;
export { setSVGGraphicsAttributes, setSVGTimingAttributes, setPrimitiveAttributes, setCoreAttributes, setAnimationElements };
