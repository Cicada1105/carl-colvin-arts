// Imports
import { infoData, imgData } from './data';
const loadHomePage = () => {
    let numDataRows = infoData.length;
    let currBox;
    let currImg;
    for (let i = 0; i < numDataRows; i++) {
        currBox = infoBox(infoData[i]);
        currImg = imgCont(imgData[i]);
        let dataRow = document.createElement('div');
        dataRow.setAttribute('class', 'row');
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
    }
};
const infoBox = (e) => {
    let box = document.createElement('section');
    let h = document.createElement('h3');
    let hText = document.createTextNode(e.header);
    h.appendChild(hText);
    // Sections contain articles
    let c = document.createElement('p');
    let cText = document.createTextNode(e.content);
    c.appendChild(cText);
    box.appendChild(h);
    box.appendChild(c);
    return box;
};
const imgCont = (currImg) => {
    // HTML figure contains image and caption
    let fig = document.createElement('figure');
    // Image to display within circular design
    let img = document.createElement('img');
    img.setAttribute('src', currImg.path);
    img.setAttribute('alt', currImg.alt);
    img.setAttribute('class', 'homeImg');
    // Circular border to add depth to image
    let imgBorder = document.createElement('img');
    imgBorder.setAttribute('src', './resources/home_imgs/img_border.png');
    imgBorder.setAttribute('class', 'imgBorder');
    // On hovering over imgBorder, fade img itself
    imgBorder.addEventListener('mouseover', () => {
        img.style.filter = 'opacity(50%)';
    });
    // On leaving image, img has full opacity
    imgBorder.addEventListener('mouseout', () => {
        img.style.filter = 'opacity(100%)';
    });
    let figCaption = document.createElement('figcaption');
    let figCaptionStr = typeof currImg.caption === "undefined" ? "" : currImg.caption;
    let figCaptionTxt = document.createTextNode(figCaptionStr);
    figCaption.appendChild(figCaptionTxt);
    fig.appendChild(img);
    fig.appendChild(imgBorder);
    fig.appendChild(figCaption);
    return fig;
};
export { loadHomePage };
