// Improts
// global
import { IImageLink } from '../global/interfaces'
import { createElement, createImageElement } from '../global/methods'
// local
import { data as images } from './data'

const createFooter = ():void => {
  // Create container to display across top
  // createElement's default element is 'div'
  let footerDiv:HTMLDivElement = createElement({idName:'footer'});

  // Container for social media links
  // createElement's default element is 'div'
  let socialCont:HTMLDivElement = createElement({idName:'social'});

  // Create image container to hold social media images
  let img:IImageLink;
  for (img of images) {
  	// Create image node
    let imgNode:HTMLImageElement = createImageElement({
      src:img.path,
      alt:img.alt,
      className:'socialImg'
    });

    let imgLink:string = img.link;
    // Add event listener to redirect to another page
    imgNode.addEventListener("click",() => {
      window.open(imgLink,"_blank");
    })
  	// Append image to social media container
  	socialCont.appendChild(imgNode);
  }
  // Append social media content to footer
  footerDiv.appendChild(socialCont);

  // Add element to body
  document.body.appendChild(footerDiv);
}

export { createFooter }