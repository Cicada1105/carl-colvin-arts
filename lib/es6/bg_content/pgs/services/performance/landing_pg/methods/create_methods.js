/*
    This file contains methods that are used in the creation of
    general elements on the page that are used multiple times.
    Used by the load_methods.ts script
*/
//	local
import * as UTILITY from './utility_methods';
const createSVGCircle = (data) => {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    // Set position of center of circle
    circle.setAttribute("cx", data.cx);
    circle.setAttribute("cy", data.cy);
    // Set radius of circle
    circle.setAttribute("r", data.r);
    // Add additional SVG graphics attributes if provided
    UTILITY.setSVGGraphicsAttributes(circle, data);
    return circle;
};
const createSVGLine = (data) => {
    let line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    // Set beginning and end points of line
    line.setAttribute("x1", data.x1);
    line.setAttribute("y1", data.y1);
    line.setAttribute("x2", data.x2);
    line.setAttribute("y2", data.y2);
    // Add additional SVG graphics attributes if provided
    UTILITY.setSVGGraphicsAttributes(line, data);
    return line;
};
const createSVGText = (data) => {
    let textEl = document.createElementNS("http://www.w3.org/2000/svg", "text");
    let text = document.createTextNode(data.text);
    // Append text node to SVG Text element
    textEl.appendChild(text);
    // Add additional SVG Primitive attributes if provided
    UTILITY.setPrimitiveAttributes(textEl, data);
    // Add additional core attributes if provided
    UTILITY.setCoreAttributes(textEl, data);
    return textEl;
};
const createSVGPath = (data) => {
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    // Set path coordinates to be drawn
    path.setAttribute("d", data.d);
    // Check if provided data includes children
    data.children && UTILITY.setAnimationElements(path, data.children);
    // Add additional SVG Graphics attributes if provided
    UTILITY.setSVGGraphicsAttributes(path, data);
    // Add additional core attributes if provided
    UTILITY.setCoreAttributes(path, data);
    return path;
};
const createSVGImage = (data) => {
    let img = document.createElementNS("http://www.w3.org/2000/svg", "image");
    // Set image source to locate image file
    img.setAttribute("href", data.href);
    // Add additional SVG Primitive attributes if provided
    UTILITY.setPrimitiveAttributes(img, data);
    // Set Core attributes if provided
    //UTILITY.setCoreAttributes(img,data);
    return img;
};
export { createSVGCircle, createSVGLine, createSVGText, createSVGPath, createSVGImage };
