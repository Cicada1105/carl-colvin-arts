/*		
	This file holds interfaces specific to the contact page
*/

// Imports
import { 
	ITextRow, ISelectRow, 
	IAreaRow, IButton 
} from '@global/interfaces/inputs'

interface IForm {
	header:string;
	form:{
		textInput: Array<ITextRow>;
		selectInput: ISelectRow;
		textAreaInput: IAreaRow;
	};
	submit:IButton
}
interface EmailRequestInterface {
	name: string;
	email: string;
	subject: string;
	body: string;
}

export { IForm, EmailRequestInterface }