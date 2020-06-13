//	methods
//		global
import { createElement, createTextElement } from '../../../../global/methods';
//	event listeners
import { ArrowClickListener } from './event_listeners';
let imgPostArray = [];
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
    // findIndex loops through array then returns first index of element that passes test
    let currentPostIndex = imgPostArray.findIndex((currPost) => currPost.postData.header === postData.header);
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
    // Only add event listener to left arrow if current post is not the first post
    if (currentPostIndex > 0) {
        // Add event listener for cycling through posts going to the left
        //	bind currentPostIndex to manipulate variable
        leftArrow.addEventListener("click", ArrowClickListener.bind(currentPostIndex));
    }
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
    // Only add event listener to right arrow if current post is not the last post
    if (currentPostIndex < (imgPostArray.length - 1)) {
        // Add event listener for cycling through posts going to the right
        //	bind currentPostIndex to manipulate variable
        rightArrow.addEventListener("click", ArrowClickListener.bind(currentPostIndex));
    }
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
export { createPostCont, imgPostArray };
