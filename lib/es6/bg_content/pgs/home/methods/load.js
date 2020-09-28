//	methods
import { createElement, createImageElement } from '../../../../global/methods/elements';
import { displayImagePost } from './display';
//	data
import { collageImages } from '../data';
import CollageData from '../classes/CollageData';
const loadMobileDisplay = () => {
    // Only store images if they have not already been created by loadCollage
    if (CollageData.isEmpty()) {
        collageImages.forEach((img) => {
            let imgNode = loadImage(img.imageData);
            let postData = img.postData;
            CollageData.storeImage(imgNode, postData);
        });
    }
    CollageData.current_index === 0 && CollageData.getImage().addEventListener("load", () => {
        displayImagePost(CollageData.getImage(), CollageData.getData());
    }, { once: true });
};
const loadCollage = () => {
    let collageCont = createElement({
        idName: "collage"
    });
    // Only store data if D=CollageData is empty
    if (CollageData.isEmpty()) {
        collageImages.forEach((img) => {
            let imgNode = loadImage(img.imageData);
            let postData = img.postData;
            // Clone node to be displayed in pop up when user clicks on image
            let imgClone = imgNode.cloneNode(true);
            // Store current image clone and post data to be used to cycle through posts
            //	-only want to store once and not each time image is clicked
            CollageData.storeImage(imgClone, postData);
            imgNode.addEventListener("click", () => {
                displayImagePost(imgClone, postData);
            });
            // Append image to the collage container
            collageCont.appendChild(imgNode);
        });
    }
    else {
        collageImages.forEach((img, index) => {
            let imgNode = loadImage(img.imageData);
            CollageData.goToIndex(index);
            imgNode.addEventListener("click", () => {
                displayImagePost(CollageData.getImage(), CollageData.getData());
            });
            // Append image to the collage container
            collageCont.appendChild(imgNode);
        });
    }
    let rows = document.getElementsByClassName("row");
    let row = rows[0];
    document.body.insertBefore(collageCont, row);
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
