// This file holds the load methods for the individual
// 	sections on the performance page
// Imports
// 	Methods
import { createSVGText, createSVGLine, createSVGCircle, createSVGPath, createSVGImage } from './create_methods';
//	Event Handlers
import { init } from './event_listeners';
//	Data
import { centerImagesData, sectorData, graphicsAttributes } from '../data';
const loadSVG = function () {
    // Get and store svg context
    const svg = this;
    /* Handle creation of children elements */
    // Create static content: circle, lines, cener image
    //	Create circles
    let circles = graphicsAttributes["circles"];
    circles.forEach((circle) => svg.appendChild(createSVGCircle(circle)));
    //	Create lines connecting outter circle to inner circle
    let lines = graphicsAttributes["lines"];
    lines.forEach((line) => svg.appendChild(createSVGLine(line)));
    // 	Create center image
    centerImagesData.forEach((imageData) => svg.appendChild(createSVGImage(imageData)));
    // 	Create each sector
    sectorData.forEach((sector, sectorNum) => {
        loadSector.bind({
            svgElement: svg,
            sectorData: sector,
            arrowNum: sectorNum,
            imageSrc: sector.image
        })();
    });
};
const loadSector = function () {
    // Store value of 'this'
    const that = this;
    // Store 'this' data to be passed onto path
    //	SVG Element needs to be passed down through components
    const svg = that.svgElement;
    const data = that.sectorData;
    const arrow = that.arrowNum;
    const image = that.imageSrc;
    // Create header for the sector and append it
    let header = createSVGText(data.sectorHeader);
    svg.appendChild(header);
    // Create underline for the sector header and append it to the sector
    let underline = createSVGLine(data.underline);
    svg.appendChild(underline);
    // Loop through and create the descriptions of current sector, appending each one
    data.descriptions.forEach((description) => {
        let descr = createSVGText(description);
        svg.appendChild(descr);
    });
    // Create path for current sector
    loadPath.bind({
        svgElement: svg,
        data: data.sectorPath,
        arrow: {
            num: arrow,
            link: data.link
        },
        imageSrc: image
    })();
    // Loop through and create the descriptions to be displayed when the user hovers over sector
    //	append each description to sector
    data.hoverHeader.forEach((header) => svg.appendChild(createSVGText(header)));
};
const loadPath = function () {
    // Store value of this
    const that = this;
    // Store 'this' data to be passed onnto evet handlers
    //	SVG Element needs to be passed down through components
    const svg = that.svgElement;
    const data = that.data;
    const arrowNum = (that.arrow["num"]);
    const arrowLink = (that.arrow["link"]);
    const image = that.imageSrc;
    // Create svg path
    let path = createSVGPath(data);
    // Bind 'this' of init to svg parent	; Binding function does not call function so must bbe invoked with "()"
    const EventHandlers = init.bind(svg)();
    path.addEventListener("mouseover", EventHandlers.MouseoverHandler.bind({
        sector: path,
        arrow: {
            num: arrowNum,
            link: arrowLink
        },
        imageSrc: image
    }));
    path.addEventListener("mouseout", EventHandlers.MouseoutHandler.bind({
        sector: path,
        arrow: {
            num: arrowNum,
            link: arrowLink
        }
    }));
    svg.appendChild(path);
};
export { loadSVG };
