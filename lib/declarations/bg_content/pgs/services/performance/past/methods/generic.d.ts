import { IGenericCard, CardOutlineInterface as ICard, IHeader } from '../interfaces';
declare const createPageSection: (cardTitle: string) => HTMLDivElement;
declare const createGenericCard: (genericUserData: IGenericCard) => void;
declare const createCardOutline: (userCardOutlineData: ICard) => SVGSVGElement;
declare const createHeaderGroup: (headers: IHeader[]) => HTMLElement;
export { createPageSection, createGenericCard, createCardOutline, createHeaderGroup };
