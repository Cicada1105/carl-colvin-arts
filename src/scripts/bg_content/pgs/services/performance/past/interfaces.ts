// This file holds the interface typing for the past performances page

// Imports
import { IBox } from '@global/interfaces/general';

interface PerformanceImageInterface {
	src:string;
	alt:string;
}
interface GenericCardInterface {
	parent:any;
	img: PerformanceImageInterface;
	headers: HeaderInterface[];
}
interface GenericUserInterface {
	img:PerformanceImageInterface;
	name:string;
	title:string;
}

/*Request Response Interfaces*/
interface RepertoireInterface {
	img: PerformanceImageInterface;
	name:string;
	description:string;
	location:string;
	instruments:string[];
	date:string;
}
interface CollaboratorInterface extends GenericUserInterface { 
	description: string;
}
interface AnecdoteInterface extends GenericUserInterface { 
	anecdote:string;
}

interface HeaderInterface {
	tagname:string;
	text:string;
}

export { 
	GenericCardInterface as IGenericCard,
	RepertoireInterface as IRepertoire, 
	CollaboratorInterface as ICollaborator, 
	AnecdoteInterface as IAnecdote,
	HeaderInterface as IHeader
}