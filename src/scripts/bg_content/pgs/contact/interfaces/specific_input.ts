/*		This file holds interfaces for specific inputs		*/

// General inputs interfaces
import { InputInterface, InputTagInterface } from './general_input'

interface TextInputInterface extends InputTagInterface {
	placeholder:string;
}

interface TextAreaInterface extends InputInterface {
	rows:string;
	cols:string;
}

/*		Interface for select 		*/
interface SelectInputInterface extends InputInterface {
	optionGroups:Array<OptionGroupInterface>;
}
/*		Interface for option groups for select 		*/
interface OptionGroupInterface {
	label: string;
	options: Array<OptionInterface>;
}
/*		Interface for options for select 		*/
interface OptionInterface {
	value:string;
	text:string;
}

/*		Interface for Submit		*/
interface ButtonInputInterface  {
	type: string;
	id: string;
	value:string;
}

interface IForm {
	header:string;
	form:{
		textInput: Array<TextInputInterface>;
		selectInput: SelectInputInterface;
		textAreaInput: TextAreaInterface;
	};
	submit:ButtonInputInterface
}

export { IForm }
export { TextInputInterface, TextAreaInterface, SelectInputInterface, ButtonInputInterface }
export { OptionGroupInterface, OptionInterface }