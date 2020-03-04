// This file is used to display navigation 

// Imports
import { links } from './data'
import { ILink } from '../global/interfaces'
import { getCurrentFile } from '../global/methods'

// Current page user is on
const CURRENT_PATH:string = getCurrentFile();

let createNavigation = ():any => {
  // Create new ul element
  let navUl = document.createElement("ul");
  // Add ul element attribute
  navUl.setAttribute("id","navigation");

  // Current link of type ILink
  let link:ILink;
  // Subdirectories of links can be array of ILinks or null
  let directories:Array<ILink> | null;
  for(link of links) { // Using of when dealing with arrays
    // Create li for current link
    let currLi:any = document.createElement("li");
    // Add text to element
    let txtNode:any = document.createTextNode(link.name);
    // Append text to li
    currLi.appendChild(txtNode);

    // Check if current file matches a link (equivalent => 0)
    if (CURRENT_PATH.localeCompare(link.name.toLowerCase()) == 0) {
      // Add attribute to current li
      currLi.setAttribute("class","active");
    }

    // Check if home page: index.html
    if (link.name.localeCompare("Carl Colvin Arts") == 0) {
      // Add id to home page
      currLi.setAttribute("id","homeLink");
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
  let subUl:any = document.createElement('ul');
  // Each sub directory of the navigation bar has same class name
  subUl.setAttribute('class','subDir');

  for (let dir of dirs) {
    // Create the current LI to be appended to UL
    let currSubLi:any;
    // Text node to store name property of dir
    let subLiTxtNode:any;

    // Create LI element for current subdirectory
    currSubLi = document.createElement("li");
    // Create text node storing li name
    subLiTxtNode = document.createTextNode(dir.name);

    // Append text node of li element to node itself
    currSubLi.appendChild(subLiTxtNode);

    if (CURRENT_PATH.localeCompare(dir.name.toLowerCase()) == 0) {
      // Add active attribute to current li
      currSubLi.setAttribute("id","active");
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