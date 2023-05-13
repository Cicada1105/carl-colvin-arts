interface PerformanceImageInterface {
    src: string;
    alt: string;
}
interface GenericCardInterface {
    parent: any;
    img: PerformanceImageInterface;
    headers: HeaderInterface[];
}
interface GenericUserInterface {
    img: PerformanceImageInterface;
    name: string;
    title: string;
}
interface RepertoireInterface {
    img: PerformanceImageInterface;
    name: string;
    description: string;
    location: string;
    instruments: string[];
    date: string;
}
interface CollaboratorInterface extends GenericUserInterface {
    description: string;
}
interface AnecdoteInterface extends GenericUserInterface {
    anecdote: string;
}
interface CardOutlineInterface {
    foreignObject: SVGForeignObjectElement;
    points: string;
    viewBox: string;
}
interface HeaderInterface {
    tagname: string;
    text: string;
}
export { GenericCardInterface as IGenericCard, RepertoireInterface as IRepertoire, CollaboratorInterface as ICollaborator, AnecdoteInterface as IAnecdote, CardOutlineInterface, HeaderInterface as IHeader };
