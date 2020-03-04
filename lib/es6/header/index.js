// Imports
import { createNavigation } from './methods';
const createHeader = () => {
    // Create container to display across top
    let headerDiv = document.createElement("div");
    // Add 'header' id
    headerDiv.setAttribute("id", "header");
    // Create navigation => returns ul element
    let navBar = createNavigation();
    // Append navigation to header
    headerDiv.appendChild(navBar);
    // Add element to body
    document.body.appendChild(headerDiv);
};
export { createHeader };
