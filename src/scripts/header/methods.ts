// This file is used to display navigation 

// Imports
// global
import { ILink } from '../global/interfaces/general'
import { getCurrentFile, createElement, createTextElement } from '../global/methods'
// local
import { links } from './data'

// Current page user is on
const CURRENT_PATH:string = getCurrentFile();

let createNavigation = ():any => {
  // Create new ul element
  let navUl:any = createElement({element:'ul',idName:'navigation'});

  // Current link of type ILink
  let link:ILink;
  // Subdirectories of links can be array of ILinks or null
  let directories:Array<ILink> | null;
  for(link of links) { // Using of when dealing with arrays
    // Create li for current link
    let currLi:any;

    // Check if current file matches a link (equivalent => 0)
    if (CURRENT_PATH.localeCompare(link.name.toLowerCase()) == 0) {
      // Add attribute to current li to signify it is the active link
      currLi = createTextElement({element:'li',text:link.name, idName:'active'});
    }
    // Check if home page to float left: index.html
    if (link.name.localeCompare("Carl Colvin Arts") == 0) {
      // Add id to home page
      currLi =  createTextElement({element:'li',text:link.name, idName:'homeLink'});
    }
    else {
      currLi = createTextElement({element:'li',text:link.name});
    }

    // Store path of current link to use in event listener
    let linkPath:string = link.link;

    // Add event listener for when link is clicked on
    currLi.addEventListener("click",() => {
      window.open(linkPath,"_self");
    });

    // Current link could either have null subdirectories or an array of ILink objects
    if ((link.subdirectories != null) && (link.subdirectories.length > 0)) {
      // Create new ul for subdirectories
      let subdirectoryUl:any = createSubdirectory(link.subdirectories);

      // Append ul subdirectory to li main directory element
      currLi.appendChild(subdirectoryUl);
    }

    /*
        parentElement.insertBefore(element1, element2)

        Goes to parentElement and inserts element1 before
        element 2
    */
    // Floating li's to the right causes navigation to be displayed
    //  backwards when using appendChild.
    navUl.insertBefore(currLi, navUl.childNodes[0]);
  }
  // Return ul node to be added to the header
  return navUl;
}

let createSubdirectory = (dirs:Array<ILink>):any => {
  // Create UL to contain LI's 
  let subUl:any = createElement({element:'ul',className:'subDir'});

  for (let dir of dirs) {
    // Create LI element for current subdirectory
    let currSubLi:any;

    if (CURRENT_PATH.localeCompare(dir.name.toLowerCase()) == 0) {
      // Add active attribute to current li
      currSubLi = createTextElement({element:'li',text:dir.name,idName:'active'});
    }
    else {
      currSubLi = createTextElement({element:'li',text:dir.name});
    }

    let subLink:string = dir.link;
    // Add event listener
    currSubLi.addEventListener("click", () => {
      window.open(subLink,"_self");
    })
    // Append current li element to subdirectory ul
    subUl.appendChild(currSubLi);
  }

  return subUl;
}

export { createNavigation }