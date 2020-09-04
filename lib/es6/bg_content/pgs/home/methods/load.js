//	methods
import { createElement, createImageElement } from '../../../../global/methods/elements';
import { displayImagePost, storeCurrentImage } from './display';
//	data
import { collageImages } from '../data';
import { imgPostArray } from './create';
const loadMobileDisplay = () => {
    collageImages.forEach((img) => {
        let imgNode = loadImage(img.imageData);
        let postData = img.postData;
        storeCurrentImage(imgNode, postData);
    });
    displayImagePost(imgPostArray[0].img, imgPostArray[0].postData);
};
const loadCollage = () => {
    let collageCont = createElement({
        idName: "collage"
    });
    collageImages.forEach((img) => {
        let imgNode = loadImage(img.imageData);
        let postData = img.postData;
        // Clone node to be displayed in pop up when user clicks on image
        let imgClone = imgNode.cloneNode(true);
        // Store current image clone and post data to be used to cycle through posts
        //	-only want to store once and not each time image is clicked
        storeCurrentImage(imgClone, postData);
        imgNode.addEventListener("click", () => {
            displayImagePost(imgClone, postData);
        });
        // Append image to the collage container
        collageCont.appendChild(imgNode);
    });
    document.body.appendChild(collageCont);
};
const loadImage = (imgData) => {
    let currImg = createImageElement({
        src: imgData.path,
        alt: imgData.alt,
        idName: imgData.idName
    });
    currImg.addEventListener("mouseover", () => {
        console.log("Hover caption: " + imgData.caption);
    });
    return currImg;
};
export { loadMobileDisplay, loadCollage };
