/*
    Global methods shared by the entire project
*/
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const getCurrentFile = () => {
    // Get current path location
    let pathName = window.location.pathname;
    // Split location path to extract file name
    let pathArray = pathName.split("/");
    // Last element will contain file name with extension
    let currPg = pathArray[pathArray.length - 1];
    // Remove extension '.html' = length of currPg(up to but not including) - 5(length of .html)
    let fileName = currPg.slice(0, (currPg.length - 5));
    return fileName;
};
function createElement({ element = "div", className = "", idName = "" }) {
    try {
        if (!className && !idName)
            throw new TypeError("className or idName ommited. createElement requires either one.");
        let e = document.createElement(element);
        if (className)
            e.setAttribute('class', className);
        if (idName)
            e.setAttribute('id', idName);
        return e;
    }
    catch (e) {
        console.log(e);
        return;
    }
}
function createTextElement(_a) {
    var { element = "p", text = "" } = _a, rest = __rest(_a, ["element", "text"]);
    try {
        if (!text)
            throw new TypeError("'text' string omitted. createTextElement requires 'text' parameter");
        let el = document.createElement(element);
        if (rest.className)
            el.setAttribute('class', rest.className);
        if (rest.idName)
            el.setAttribute('id', rest.idName);
        let txt = text;
        let txtNode = document.createTextNode(txt);
        el.appendChild(txtNode);
        return el;
    }
    catch (e) {
        console.log(e);
    }
}
function createImageElement(_a) {
    var { src = '', alt = '' } = _a, rest = __rest(_a, ["src", "alt"]);
    try {
        if (!src)
            throw new TypeError("'src' parameter ommited. createImageElement requires 'src' parameter");
        let img = document.createElement('img');
        img.setAttribute('src', src);
        if (alt)
            img.setAttribute('alt', alt);
        if (rest.className)
            img.setAttribute('class', rest.className);
        if (rest.idName)
            img.setAttribute('id', rest.idName);
        return img;
    }
    catch (e) {
        console.log(e);
    }
}
const loadBootstrap = () => {
    // Create link tag for Bootstrap Font Awesome icons
    let bootstrapLink = document.createElement('script');
    // Add href attribute
    bootstrapLink.setAttribute('src', 'https://kit.fontawesome.com/296e9763f7.js');
    // Append Bootstrap cdn to head for font asesome icons
    document.head.appendChild(bootstrapLink);
};
export { getCurrentFile, createElement, createTextElement, createImageElement, loadBootstrap };
