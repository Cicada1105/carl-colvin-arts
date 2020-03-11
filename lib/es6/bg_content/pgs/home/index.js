// Imports
import { Rows } from './data';
import { createElement, createTextElement, createImageElement } from '../../../global/methods';
const loadHomePage = () => {
    let currBox;
    let currImg;
    Rows.forEach((row, i) => {
        currBox = infoBox(row.infoData);
        currImg = imgCont(row.imgData);
        // createElement's default element is div
        let dataRow = createElement({ className: 'row' });
        // Alternate info boxes and images
        if (i % 2 == 0) {
            currBox.setAttribute('id', 'left');
            currImg.setAttribute('id', 'right');
        }
        else {
            currImg.setAttribute('id', 'left');
            currBox.setAttribute('id', 'right');
        }
        dataRow.appendChild(currBox);
        dataRow.appendChild(currImg);
        // Append each row to the page
        document.body.appendChild(dataRow);
    });
};
const infoBox = (e) => {
    let box = document.createElement('section');
    let h = createTextElement({ element: 'h3', text: e.header });
    // Sections contain articles/paragraphs
    // createTextElement's default element is 'p'
    let c = createTextElement({ text: e.content });
    box.appendChild(h);
    box.appendChild(c);
    return box;
};
const imgCont = (currImg) => {
    // Create container to store the figure/image, border and data
    // createElement's default element is 'div'
    let fig = createElement({ className: 'figure' });
    // Image to display
    let img = createImageElement({ src: currImg.path, alt: currImg.alt, className: 'homeImg' });
    // Circular border to add depth to image
    let imgBorder = createImageElement({ src: './resources/home_imgs/img_border.png', className: 'imgBorder' });
    let figCaption = createElement({ className: 'figcaption' });
    // Data to display when user hovers over the image
    let figCaptionP;
    let figCaptionStr = typeof currImg.caption === "undefined" ? "" : currImg.caption;
    figCaptionP = createTextElement({ text: figCaptionStr });
    // On hovering over imgBorder, fade img itself
    // Display data 
    imgBorder.addEventListener('mouseover', () => {
        img.style.filter = 'opacity(50%)';
        figCaption.style.display = 'block';
    });
    // On leaving image, img has full opacity
    // Hide data
    imgBorder.addEventListener('mouseout', () => {
        img.style.filter = 'opacity(100%)';
        figCaption.style.display = 'none';
    });
    // Append paragraph to caption container
    figCaption.appendChild(figCaptionP);
    fig.appendChild(img);
    fig.appendChild(imgBorder);
    fig.appendChild(figCaption);
    return fig;
};
export { loadHomePage };
