//	methods
//		global
import { createElement, createTextElement } from '../../../../global/methods/elements';
//	event listeners
import { ArrowClickListener } from './event_listeners';
//  data 
import CollageData from '../classes/CollageData';
/*
    @params
    postData:IBox
        -header and content to be displayed to the side of image

    This function creates elements for post and left and right arrows

    @return
    postCont:any
        -Container holding left and right arrows and post data
*/
const createPostCont = (postData) => {
    // Store current location of postData 
    let currentPostIndex = CollageData.findIndex(postData);
    // Go to location of current post
    CollageData.goToIndex(currentPostIndex);
    // Post container will hold the two "panels" one that holds image on left 
    //  and one that holds caption on right
    let postCont = createElement({
        className: "postCont"
    });
    // Create container for left arrow for positioning
    let leftArrowCont = createElement({
        className: "arrowCont",
        idName: "leftArrowCont"
    });
    // Create left arrow
    let leftArrow = createElement({ element: "i", className: "fas fa-chevron-left" });
    // Add event listener for cycling through posts going to the left
    leftArrow.addEventListener("click", ArrowClickListener); // Note: Out of bounds checking handled by CollageData class
    // Append left arrow to positioning container
    leftArrowCont.appendChild(leftArrow);
    // Create container for post 
    let postCardCont = createPostCard(postData);
    // Create container for right arrow for positioning
    let rightArrowCont = createElement({
        className: "arrowCont",
        idName: "rightArrowCont"
    });
    // Create right arrow 
    let rightArrow = createElement({ element: "i", className: "fas fa-chevron-right" });
    // Add event listener for cycling through posts going to the right
    rightArrow.addEventListener("click", ArrowClickListener); // Note: Out of bounds checking handled by CollageData class
    // Append right arrow to positioning container
    rightArrowCont.appendChild(rightArrow);
    // Append left arrow container, postCardCont and right arrow container to postCont
    postCont.appendChild(leftArrowCont);
    postCont.appendChild(postCardCont);
    postCont.appendChild(rightArrowCont);
    return postCont;
};
/*
    @params
    postData:IBox
        -Data to be displayed describing image

    This function creates the actual content for the post describing the current image

    @return
    cont:any
        -Container holding the header, hr divider and content of the image
*/
const createPostCard = (postData) => {
    let cont = createElement({
        className: "postDataCont"
    });
    let header = postData.header;
    let content = postData.content;
    // Create header container
    let headerCont = createTextElement({
        element: "h3",
        text: header,
        idName: "postCardHeader"
    });
    // Create hr to section header from content
    let hr = createElement({
        element: "hr",
        idName: "postCardHr"
    });
    // Create content container
    let contentCont = createTextElement({
        text: content,
        idName: "postCardContent"
    });
    // Append header, hr and content to postCard
    cont.appendChild(headerCont);
    cont.appendChild(hr);
    cont.appendChild(contentCont);
    return cont;
};
export { createPostCont };
