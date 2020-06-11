/*		This file holds interfaces for basic inputs		*/

interface LabelInterface {
	text:string;
	for:string;
}

interface InputInterface {
	label: LabelInterface;
	id:string;
}

interface InputTagInterface extends InputInterface {
	type:string;
}

export { InputInterface, InputTagInterface, LabelInterface }