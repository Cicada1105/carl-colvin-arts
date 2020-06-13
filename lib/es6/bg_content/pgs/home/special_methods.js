//	methods
import { createElement, createTextElement } from '../../../global/methods';
let imgPostArray = [];
const storeCurrentImage = (image, data) => {
    imgPostArray.push({ img: image, postData: data });
};
/*
    @params
    img:HTMLImageElement
        -Image to be appended to the pop up window that the user clicked on
    postData:IBox
        -Data associated with/describing img

    This function will create "pop up" window/post that will hold image on left
        and container holding the data describing the image, arrow keys and exit
        button on the right. Result will be automatically display to document

    @return
    void
*/
const displayImagePost = (img, postData) => {
    let imgPostBackdrop = createElement({
        idName: "postBackdrop"
    });
    // Create container for image and post details
    let imgPostCont = createElement({
        className: "imgPostCont"
    });
    // Create container for image
    let imgCont = createElement({
        className: "imgCont"
    });
    // Append image to container
    imgCont.appendChild(img);
    // Create container that holds post details, functionality and exit
    let postCont = createPostCont(postData);
    // Create exit button
    let exitButton = createElement({ element: "i", className: "fas fa-times" });
    // Add event listener to exit button to remove backdrop and image post container
    exitButton.addEventListener("click", () => {
        imgPostBackdrop.remove();
        imgPostCont.remove();
    });
    // Append image container, post container, and exit button to "pop up" container
    imgPostCont.appendChild(imgCont);
    imgPostCont.appendChild(postCont);
    imgPostCont.appendChild(exitButton);
    // Depending on image size and its affect on imgPostCont, center accordingly
    // Image computed dimensions after style has been applied
    //let widthStr:string = window.getComputedStyle(img)["width"];	// Returns string with px
    //let heightStr:string = window.getComputedStyle(img)["height"];	// Returns string with px
    //let width:number = parseFloat(widthStr);
    //let height:number = parseFloat(heightStr);
    let width = img.width;
    let height = img.height;
    /*
        Default width and height of container 40rem x 20rem (640px x 320px)
            centering image by 50% results in left and top being at 50% and not the
            center of the container.
                -If height is greater than default height, "subtract"
                margin top by half height for vertical centering, else "subtract" half of
                default: 160
                -If width is greater than half of default width (one side for image one
                side for post), "subtract" margin left by half for horizontal centering,
                else "subtract" half of default: 320
    */
    imgPostCont.style.marginTop = -(height > 320 ? (height / 2) : 160) + "px";
    imgPostCont.style.marginLeft = -(width > 320 ? width : 320) + "px";
    // Size container according to image dimensions 
    // 		if height > default height => imgPostCont height = image height
    //		if width > half of default width => imgPostCont width = image width times two
    imgPostCont.style.height = (height > 320 ? height : 320) + "px";
    imgPostCont.style.width = (width > 320 ? (width * 2) : 640) + "px";
    // Append backdrop to the page to be displayed
    document.body.appendChild(imgPostBackdrop);
    // Append "pop up" container to the page to prevent inheriting properties from backdrop
    document.body.appendChild(imgPostCont);
};
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
        leftArrow.addEventListener("click", () => {
            // Mimic click event of exit button
            let clickEvent = new Event("click");
            let exitButton = postCont.nextElementSibling;
            exitButton.dispatchEvent(clickEvent);
            // Deccrement to next post
            currentPostIndex--;
            // Display current post data
            displayImagePost(imgPostArray[currentPostIndex].img, imgPostArray[currentPostIndex].postData);
        });
    }
    // Append left arrow to positioning container
    leftArrowCont.appendChild(leftArrow);
    // Create container for post 
    let postCardCont = postCard(postData);
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
        rightArrow.addEventListener("click", () => {
            // Remove current post by accessing exit button
            // Mimi click event of exit button
            let clickEvent = new Event("click");
            let exitButton = postCont.nextElementSibling;
            // Remove current post by accessing exit button
            exitButton.dispatchEvent(clickEvent);
            // Increment to next post
            currentPostIndex++;
            // Display current post data
            displayImagePost(imgPostArray[currentPostIndex].img, imgPostArray[currentPostIndex].postData);
        });
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
const postCard = (postData) => {
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
export { displayImagePost, storeCurrentImage };
