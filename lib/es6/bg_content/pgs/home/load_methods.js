//	methods
import { createElement, createImageElement } from '../../../global/methods';
//	data
import { collageImages } from './data';
const loadCollage = () => {
    let collageCont = createElement({
        idName: "collage"
    });
    collageImages.forEach((img) => {
        // Append image to the collage container
        collageCont.appendChild(loadImage(img));
    });
    document.body.appendChild(collageCont);
};
const loadImage = (img) => {
    let imgData = img.imageData;
    let postData = img.postData;
    let currImg = createImageElement({
        src: imgData.path,
        alt: imgData.alt,
        className: imgData.className
    });
    // Clone image node so original image remains in collage
    let currImgClone = currImg.cloneNode(true);
    currImg.addEventListener("click", () => displayImagePost(currImgClone, postData));
    currImg.addEventListener("hover", () => {
        console.log("Hovered over: " + currImg);
    });
    return currImg;
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
    let imgPostCont = createElement({
        idName: "imgPostCont"
    });
    /*
        // Create container that holds post details, functionality and exit
        let postCont:any = createPostCont(postData);
    */
    // Create exit button
    let exitButton = createElement({ element: "i", className: "fas fa-times" });
    // Add event listener to exit button to remove backdrop and image post container
    exitButton.addEventListener("click", () => {
        imgPostBackdrop.remove();
        imgPostCont.remove();
    });
    // Append image, post container, and exit button to "pop up" container
    imgPostCont.appendChild(img);
    /*
        imgPostCont.appendChild(postCont);
    */
    imgPostCont.appendChild(exitButton);
    // Depending on image size and its affect on imgPostCont, center accordingly
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
    imgPostCont.style.marginTop = -(img.height > 320 ? (img.height / 2) : 160) + "px";
    imgPostCont.style.marginLeft = -(img.width > 320 ? img.width : 320) + "px";
    // Size container according to image dimensions 
    // 		if height > default height => imgPostCont height = image height
    //		if width > half of default width => imgPostCont width = image width times two
    imgPostCont.style.height = (img.height > 320 ? img.height : 320) + "px";
    imgPostCont.style.width = (img.width > 320 ? (img.width * 2) : 640) + "px";
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
    // Post container will hold the two "panels" one that holds image on left 
    //  and one that holds caption on right
    let postCont = createElement({
        idName: "postCont"
    });
    // Create left arrow
    //let leftArrow:any = createElement({element:"i",className:""});
    // Create container for post 
    let postCardCont = postCard(postData);
    // Create right arrow 
    //let rightArrow:any = createElement({element:"i",className:""});
    // Append left arrow, postCardCont, right arrow and exit button to postCont
    //postCont.appendChild(leftArrow);
    postCont.appendChild(postCardCont);
    //postCont.appendChild(rightArrow);
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
    console.log(`Post data: \nHeader: ${header}\nContent: ${content}`);
    return cont;
};
export { loadCollage };
