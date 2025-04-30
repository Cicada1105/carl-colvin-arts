import { IImage } from '@global/interfaces/general';
interface SVGGraphicsInterface {
    fill?: string;
    fillOpacity?: string;
    stroke?: string;
    strokeWidth?: string;
    strokeOpacity?: string;
}
interface TimingAttributesInterface extends SVGGraphicsInterface {
    from?: string;
    to?: string;
    begin?: string;
    end?: string;
    fill?: string;
    dur?: string;
}
interface PrimitiveAttributesInterface {
    x?: string;
    y?: string;
    width?: string;
    height?: string;
}
interface CoreAttributesInterface {
    idName?: string;
    className?: string;
}
interface AnimationAttributesInterface extends TimingAttributesInterface {
    attributeName: string;
}
interface SetInterface extends AnimationAttributesInterface {
}
interface AnimateInterface extends AnimationAttributesInterface, CoreAttributesInterface {
}
declare type AnimationElements = SetInterface[] | AnimateInterface[];
interface SVGImageInterface extends PrimitiveAttributesInterface, CoreAttributesInterface {
    href: string;
}
interface CircleInterface extends SVGGraphicsInterface, CoreAttributesInterface {
    cx: string;
    cy: string;
    r: string;
}
interface LineInterface extends SVGGraphicsInterface {
    x1: string;
    y1: string;
    x2: string;
    y2: string;
}
interface PathInterface extends SVGGraphicsInterface, CoreAttributesInterface {
    d: string;
    children?: AnimationElements;
}
interface TextInterface extends PrimitiveAttributesInterface, CoreAttributesInterface {
    text: string;
}
interface ISector {
    sectorHeader: TextInterface;
    underline: LineInterface;
    descriptions: TextInterface[];
    sectorPath: PathInterface;
    hoverHeader: TextInterface[];
    link: string;
    image: IImage;
}
export { CircleInterface, LineInterface, PathInterface, TextInterface, AnimateInterface, SetInterface, SVGImageInterface, ISector, AnimationAttributesInterface, AnimationElements, SVGGraphicsInterface, TimingAttributesInterface, PrimitiveAttributesInterface, CoreAttributesInterface };
