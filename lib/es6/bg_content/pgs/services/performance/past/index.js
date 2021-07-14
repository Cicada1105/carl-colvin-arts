/*
    File for initializing past performance page
*/
// Imports
import { loadRepertoire, loadCollaborators, loadAnecdotes, loadContactLink } from './methods/load';
import { createTextElement } from '../../../../../global/methods/elements';
const loadPreviousPerformances = () => {
    // Create page header
    let title = createTextElement({
        element: "h1",
        text: "Past Performanecs",
        idName: "previousPerformancesTitle"
    });
    document.body.appendChild(title);
    // Load past performane content
    loadRepertoire();
    loadCollaborators();
    loadAnecdotes();
    // Load contact link
    loadContactLink();
};
export { loadPreviousPerformances };
