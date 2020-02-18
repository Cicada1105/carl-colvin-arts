// Imports
import { links } from './data';
import { getCurrentFile } from './methods';
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
const createNavigation = () => {
    // Store current path
    let currPath = getCurrentFile();
    // Current link of type ILink
    let link;
    // Subdirectories of links can be array of ILinks or null
    let directories;
    // Create new ul element
    let navUl = document.createElement("ul");
    // Add ul element attribute
    navUl.setAttribute("id", "navigation");
    for (link of links) {
        // Create li for current link
        let currLi = document.createElement("li");
        // Add text to element
        let txtNode = document.createTextNode(link.name);
        // Append text to li
        currLi.appendChild(txtNode);
        // Check if current file matches a link (equivalent => 0)
        if (currPath.localeCompare(link.name.toLowerCase()) == 0) {
            // Add attribute to current li
            currLi.setAttribute("class", "active");
        }
        // Check if home page: index.html
        if (link.name.localeCompare("Carl Colvin Arts") == 0) {
            // Add id to home page
            currLi.setAttribute("id", "homeLink");
        }
        // Store path of current link to use in event listener
        let linkPath = link.path;
        // Add event listener for when link is clicked on
        currLi.addEventListener("click", () => {
            window.open(linkPath, "_self");
        });
        // Store current subdirectories to loop through
        /*directories = link.subdirectories;
        // Current link could either have null subdirectories or an array of ILink objects
        if ((directories != null) && (directories.length > 0)) {
          // Create new ul for subdirectories
          let subUl = document.createElement("ul");
          let subLi:any;
          let subLiTxt:any;
    
          for (let dir of directories) {
            // Create li element for current subdirectory
            subLi = document.createElement("li");
            // Create text node storing li name
            subLiTxt = document.createTextNode(dir.name);
            // Append text node of li element to node itself
            subLi.appendChild(subLiTxt);
    
            if (currPath.localeCompare(dir.name.toLowerCase()) == 0) {
              // Add active attribute to current li
              subLi.setAttribute("id","active");
    
              // No need to continue comparing other links
              break;
            }
    
            // Append current li element to subdirectory ul
            subUl.appendChild(subLi);
          }
    
          // Append ul subdirectory to li main directory element
          currLi.appendChild(subUl);
        }*/
        // Append current li element to the ul navigation
        navUl.appendChild(currLi);
    }
    // Return ul node to be added to the header
    return navUl;
};
export { createHeader };
