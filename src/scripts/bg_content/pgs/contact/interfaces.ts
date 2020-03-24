// Interfaces to be used by the contact page

interface InputInterface {
	type:string;
	name:string;
}

interface TextInputInterface extends InputInterface{
	displayName:string;
	placeholder:string;
}

interface ButtonInputInterface extends InputInterface {
	value:string;
}

interface IForm {
	header:string;
	form:Array<TextInputInterface>;
	submit:ButtonInputInterface
}

export { IForm }
export { TextInputInterface, ButtonInputInterface }