// Holds interfaces for local home directory
// Imports
import { IImage, IBoxLink } from '../../../global/interfaces/general'

interface IRow {
	infoData:IBoxLink<string>;
	imgData:IImage;
}

export { IRow }