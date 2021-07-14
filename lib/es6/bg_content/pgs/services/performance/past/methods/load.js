/*
    This file holds the load methods for creating
    repertoire, collaborators and anecdotes sections
*/
// Imports
//	Local
//		methods
import { createPerformanceCard, createCollaboratorCard, createAnecdoteCard } from './create';
import { createPageSection } from './generic';
import { requestPastData } from './requests';
//	Global
import { createTextElement, createContactLink } from '../../../../../../global/methods/elements';
const loadRepertoire = () => {
    // Create container for holding past performances
    const repertoireCont = createPageSection("Repertoire");
    // Create temporary loading text 
    const loadingTxt = createTextElement({
        element: "h3",
        text: "Loading...",
        idName: "loadingText"
    });
    // Append loading text to repertoire container
    repertoireCont.appendChild(loadingTxt);
    // Append container to body
    document.body.appendChild(repertoireCont);
    // Make request to get past performances
    requestPastData("past").then((response) => {
        let performances = response;
        // Remove loading text 
        repertoireCont.removeChild(loadingTxt);
        performances.forEach((performance) => {
            // Create performance card with current performance data
            let performanceCard = createPerformanceCard(performance);
            // Append performance card to parent container
            repertoireCont.appendChild(performanceCard);
        });
    }).catch((err) => {
        console.error(err);
    });
};
const loadCollaborators = () => {
    // Create container for holding collaborators
    const collaboratorsCont = createPageSection("Collaborators");
    // Create temporary loading text 
    const loadingTxt = createTextElement({
        element: "h3",
        text: "Loading...",
        idName: "loadingText"
    });
    // Append loading text to collaborators container
    collaboratorsCont.appendChild(loadingTxt);
    // Append container to body
    document.body.appendChild(collaboratorsCont);
    // Make request to get collaborators
    requestPastData("past/collaborators").then((response) => {
        let collaborators = response;
        // Remove loading text
        collaboratorsCont.removeChild(loadingTxt);
        // Append collaborators 
        collaborators.forEach((collaborator) => {
            // Create collaborator card with current collaborator data
            let collaboratorCard = createCollaboratorCard(collaborator);
            // Append collaborator card to parent container
            collaboratorsCont.appendChild(collaboratorCard);
        });
    }).catch((err) => {
        console.error(err);
    });
};
const loadAnecdotes = () => {
    // Create container for holding anecdotes
    const anecdotesCont = createPageSection("Anecdotes");
    // Create temporary loading text 
    const loadingTxt = createTextElement({
        element: "h3",
        text: "Loading...",
        idName: "loadingText"
    });
    // Append loading text to anecdotes container
    anecdotesCont.appendChild(loadingTxt);
    // Append container to body
    document.body.appendChild(anecdotesCont);
    // Make request to get anecdotes
    requestPastData("past/anecdotes").then((response) => {
        let anecdotes = response;
        // Remove loading text 
        anecdotesCont.removeChild(loadingTxt);
        // Append anecdotes 
        anecdotes.forEach((anecdote) => {
            // Create anecdote card with currrent anecdote data 
            let anecdoteCard = createAnecdoteCard(anecdote);
            // Append anecdote card to parent container
            anecdotesCont.appendChild(anecdoteCard);
        });
    }).catch((err) => {
        console.error(err);
    });
};
const loadContactLink = () => {
    let linkData = {
        text: "Request Performance Info",
        from: "past",
        path: "../../contact.html"
    };
    let contactLinkCont = createContactLink(linkData);
    document.body.appendChild(contactLinkCont);
};
export { loadRepertoire, loadCollaborators, loadAnecdotes, loadContactLink };
