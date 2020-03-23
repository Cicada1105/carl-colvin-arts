/*
	Interfaces shared by the entire project
*/
interface ImageInterface {
	path:string;
	alt:string;
	caption?:string;
}
interface ImageLinkInterface extends ImageInterface {
	link:string;
}
interface ILink {
	name:string;
	link:string;
	subdirectories: ILink[] | null;
}
interface IBox {
	header:string;
	content:string;

}
interface IBoxLink extends IBox {
	link:string;
}

export { ImageInterface as IImage }
export { ImageLinkInterface as IImageLink }
export { ILink, IBox, IBoxLink }