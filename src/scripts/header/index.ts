// Imports
// global
import { createElement } from '../global/methods/elements'
// local
import { createNavigation } from './methods'

const createHeader = ():void => {
  // Create container to display across top
  // createElement's default element is 'div'
  let headerDiv:any = createElement({idName:'header'});
  
  // Create navigation => returns ul element
  let navBar:any = createNavigation();
  // Append navigation to header
  headerDiv.appendChild(navBar);
  // Add element to body
  document.body.appendChild(headerDiv);
}

export { createHeader }