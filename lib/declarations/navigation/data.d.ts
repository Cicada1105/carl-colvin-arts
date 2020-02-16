interface ILink {
    name: string;
    subdirectories: ILink[] | null;
}
declare const links: Array<ILink>;
export { links, ILink };
