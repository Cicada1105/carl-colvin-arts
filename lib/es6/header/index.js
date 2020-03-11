// Imports
// global
import { createElement } from '../global/methods';
// local
import { createNavigation } from './methods';
const createHeader = () => {
    // Create container to display across top
    // createElement's default element is 'div'
    let headerDiv = createElement({ idName: 'header' });
    // Create navigation => returns ul element
    let navBar = createNavigation();
    // Append navigation to header
    headerDiv.appendChild(navBar);
    // Add element to body
    document.body.appendChild(headerDiv);
};
export { createHeader };
