import { createElement, createImageElement } from '../global/methods';
// local
import { data as images } from './data';
const createFooter = () => {
    // Create container to display across top
    // createElement's default element is 'div'
    let footerDiv = createElement({ idName: 'footer' });
    // Container for social media links
    // createElement's default element is 'div'
    let socialCont = createElement({ idName: 'social' });
    // Create image container to hold social media images
    let img;
    for (img of images) {
        // Create image node
        let imgNode = createImageElement({
            src: img.path,
            alt: img.alt,
            className: 'socialImg'
        });
        let imgLink = img.link;
        // Add event listener to redirect to another page
        imgNode.addEventListener("click", () => {
            window.open(imgLink, "_blank");
        });
        // Append image to social media container
        socialCont.appendChild(imgNode);
    }
    // Append social media content to footer
    footerDiv.appendChild(socialCont);
    // Add element to body
    document.body.appendChild(footerDiv);
};
export { createFooter };
