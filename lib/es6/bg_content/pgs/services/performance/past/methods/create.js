/*
    This file is for hosting methods for creating
    inidividual cards/collaborators/anecdotes
*/
// Imports
import { createElement, createTextElement } from '../../../../../../global/methods/elements';
import { createGenericCard, createCardOutline } from './generic';
const createPerformanceCard = (data) => {
    let cardCont = createElement({
        element: "section",
        className: "pastPerformanceCard"
    });
    // Append generic data to parent container
    createGenericCard({
        parent: cardCont,
        img: {
            src: data.img["src"],
            alt: data.img["alt"]
        },
        headers: [
            {
                tagname: "h2",
                text: data.name
            },
            {
                tagname: "h4",
                text: `  -  ${data.location}`
            }
        ]
    });
    // Create paragraphs for date and instruments
    let date = createTextElement({
        text: data.date,
        className: "date"
    });
    let instrumentsStr = "";
    data.instruments.forEach((instrument, i) => {
        instrumentsStr += (i === 0 ? instrument : `, ${instrument}`);
    });
    let instrumentsEl = createTextElement({
        text: instrumentsStr,
        className: "instruments"
    });
    // Create article section for past performance description
    let description = createTextElement({
        element: "article",
        text: data.description
    });
    // Append non generic html elements, specific to performance card, to card container
    cardCont.appendChild(date);
    cardCont.appendChild(instrumentsEl);
    cardCont.appendChild(description);
    return cardCont;
};
const createCollaboratorCard = (data) => {
    // Create cotainer for holding collaborator data=
    let collaboratorCard = createElement({
        element: "section",
        className: "collaboratorCard"
    });
    // Create foreign object to hold html elements inside svg 
    let foreignObj = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    // Append generic data to parent container
    createGenericCard({
        parent: foreignObj,
        img: {
            src: data.img["src"],
            alt: data.img["alt"]
        },
        headers: [
            {
                tagname: "h2",
                text: data["name"]
            },
            {
                tagname: "h3",
                text: data["title"]
            }
        ]
    });
    // Create collaborator outline, passing in html elements 
    let svgOutlineData = {
        foreignObject: foreignObj,
        points: "230,64 318.5,64 318.5,238.5 1.5,238.5 1.5,64 90,65"
    };
    let svgOutline = createCardOutline(svgOutlineData);
    // Append collaborator outline, with html elements (added to svg with createCardOutline), to collaborator card
    collaboratorCard.appendChild(svgOutline);
    return collaboratorCard;
};
const createAnecdoteCard = (data) => {
    // Create container for holding anecdote data 
    let anecdoteCard = createElement({
        element: "section",
        className: "anecdoteCard"
    });
    // Create foreign object to hold html elements inside svg 
    let foreignObj = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    // Append generic data to parent container
    createGenericCard({
        parent: foreignObj,
        img: {
            src: data.img["src"],
            alt: data.img["alt"]
        },
        headers: [
            {
                tagname: "h3",
                text: data["name"]
            },
            {
                tagname: "h4",
                text: data["title"]
            }
        ]
    });
    // Create article for holding user's anecdote 
    let anecdoteMsg = createTextElement({
        element: "article",
        text: data["anecdote"]
    });
    // Append non generic html elements, specific to anecdote card, to foreign object 
    foreignObj.appendChild(anecdoteMsg);
    // Create anecdote outline, passing in html elements 
    let svgOutlineData = {
        foreignObject: foreignObj,
        points: "410,64 638.5,64 638.5,270.5 1.5,270.5 1.5,64 230,64"
    };
    let svgOutline = createCardOutline(svgOutlineData);
    // Append anecdote outline, with html elements (added to svg with createCardOutline), to anecdote card
    anecdoteCard.appendChild(svgOutline);
    return anecdoteCard;
};
export { createPerformanceCard, createCollaboratorCard, createAnecdoteCard };
