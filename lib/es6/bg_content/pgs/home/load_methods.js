//	methods
import { createElement, createImageElement } from '../../../global/methods';
//	data
import { collageImages } from './data';
const loadCollage = () => {
    let collageCont = createElement({
        idName: "collage"
    });
    collageImages.forEach((img) => {
        /*let imgGridCont:any = createElement({
            className:"collageGridItem"
        });*/
        //imgGridCont.appendChild(loadImage(img));
        // Append image grid container to the collage container
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
    // Create container that holds post details, functionality and exit
    let postCont = loadPostCont(postData);
    // Append image and post container to "pop up" container
    imgPostCont.appendChild(img);
    imgPostCont.appendChild(postCont);
    // Append "pop up" container to post backdrop
    imgPostBackdrop.appendChild(imgPostCont);
    // Append backdrop to the page to be displayed
    document.body.appendChild(imgPostBackdrop);
};
/*
    @params
    postData:IBox
        -header and content to be displayed to the side of image

    This function creates elements for post, left and right arrows, and exit button

    @return
    postCont:any
        -Container holding left and right arrows, post data and exit button
*/
const loadPostCont = (postData) => {
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
    // Create exit button
    //let exitButton:any = createElement({element:"i",className:""});
    // Append left arrow, postCardCont, right arrow and exit button to postCont
    //postCont.appendChild(leftArrow);
    postCont.appendChild(postCardCont);
    //postCont.appendChild(rightArrow);
    //postCont.appendChild(exitButton);
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
