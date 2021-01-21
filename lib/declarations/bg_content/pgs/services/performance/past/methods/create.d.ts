import { IRepertoire, ICollaborator, IAnecdote } from '../interfaces';
declare const createPerformanceCard: (pastPerformanceData: IRepertoire) => HTMLElement;
declare const createCollaboratorCard: (collaboratorCardData: ICollaborator) => HTMLElement;
declare const createAnecdoteCard: (anecdoteCardData: IAnecdote) => HTMLElement;
export { createPerformanceCard, createCollaboratorCard, createAnecdoteCard };
