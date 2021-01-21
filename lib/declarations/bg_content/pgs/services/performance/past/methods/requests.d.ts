import { IRepertoire, ICollaborator, IAnecdote } from '../interfaces';
declare type RequestResponseType = IRepertoire[] | ICollaborator[] | IAnecdote[];
declare const requestPastData: (requestSubPath: string) => Promise<RequestResponseType>;
export { RequestResponseType, requestPastData };
