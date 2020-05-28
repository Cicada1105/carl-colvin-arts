//	methods
import { createElement, createImageElement } from '../../../global/methods';
import { displayImagePost } from './special_methods';
//	data
import { collageImages } from './data';
const loadCollage = () => {
    let collageCont = createElement({
        idName: "collage"
    });
    // Keep array of images to loop through for post "slide show"
    //let imgPostArray:Array<Node> = [];
    collageImages.forEach((img) => {
        let imgNode = loadImage(img.imageData);
        // Add click event listener after loading images to body to get css computed dimensions for pop up window
        let postData = img.postData;
        let imgClone = imgNode.cloneNode(true);
        imgNode.addEventListener("click", () => {
            displayImagePost(imgNode.cloneNode(true), postData);
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
    currImg.addEventListener("hover", () => console.log("Hover caption: " + imgData.caption));
    return currImg;
};
export { loadCollage };
