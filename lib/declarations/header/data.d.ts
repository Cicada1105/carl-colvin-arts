interface ILink {
    name: string;
    path: string;
    subdirectories: ILink[] | null;
}
declare const links: Array<ILink>;
export { links, ILink };
