// Imports
// global
import { createElement } from '../global/methods/elements'
// local
import { createNavigation } from './methods'

const createHeader = ():void => {
  // Create container to display across top
  // createElement's default element is 'div'
  let pageHeader:HTMLElement = createElement({
    element:'header',
    idName: 'pageHeader'
  });
  
  // Create navigation => returns ul element
  let navBar:HTMLUListElement = createNavigation();
  // Append navigation to header
  pageHeader.appendChild(navBar);
  // Add element to body
  document.body.appendChild(pageHeader);
}

export { createHeader }