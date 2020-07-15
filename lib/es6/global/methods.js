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
            throw new TypeError("className or idName parameter ommited. createElement requires either one.");
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
            throw new TypeError("'text' parameter omitted. createTextElement requires 'text' parameter");
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
        return;
    }
}
function createLabelElement(_a) {
    var { text = "", forIn = "" } = _a, rest = __rest(_a, ["text", "forIn"]);
    try {
        if (!text)
            throw new TypeError("'text' parameter omitted. createLabelElement requires 'text' parameter");
        if (!forIn)
            throw new TypeError("'for' parameter omitted. createLabelElement requires 'for' parameter\n");
        let label = document.createElement("label");
        if (rest.className)
            label.setAttribute("class", rest.className);
        if (rest.idName)
            label.setAttribute("id", rest.idName);
        label.setAttribute("for", forIn);
        let txt = text;
        let txtNode = document.createTextNode(txt);
        label.appendChild(txtNode);
        return label;
    }
    catch (e) {
        console.log(e);
        return;
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
        return;
    }
}
const createSelectElement = (_a) => {
    var { options = [{}] } = _a, rest = __rest(_a, ["options"]);
    try {
        if (options.length == 1) // initial array needs empty object (length == 1)
            throw new TypeError("'options' parameter omitted. createSelectElement requires 'options' parameter");
        let selectEl = document.createElement('select');
        if (rest.className)
            selectEl.setAttribute("class", rest.className);
        if (rest.idName)
            selectEl.setAttribute("id", rest.idName);
        // Include default options
        let defaultOpt = createTextElement({
            element: "option",
            text: "-Select-"
        });
        defaultOpt.setAttribute("value", "none");
        selectEl.appendChild(defaultOpt);
        if (options.every(opt => opt.hasOwnProperty("label"))) {
            let opts = options;
            opts.forEach((group) => {
                let groupEl = document.createElement("optgroup");
                groupEl.setAttribute("label", group.label);
                group.options.forEach((opt) => {
                    let el = document.createElement("option");
                    el.setAttribute("value", opt.value);
                    let txt = opt.display;
                    let txtNode = document.createTextNode(txt);
                    el.appendChild(txtNode);
                    groupEl.appendChild(el);
                });
                selectEl.appendChild(groupEl);
            });
        }
        else {
            let opts = options;
            opts.forEach((opt) => {
                let el = document.createElement("option");
                el.setAttribute("value", opt.value);
                let txt = opt.display;
                let txtNode = document.createTextNode(txt);
                el.appendChild(txtNode);
                selectEl.appendChild(el);
            });
        }
        return selectEl;
    }
    catch (e) {
        console.log(e);
        return;
    }
};
const loadBootstrap = () => {
    // Create link tag for Bootstrap Font Awesome icons
    let bootstrapLink = document.createElement('script');
    // Add href attribute
    bootstrapLink.setAttribute('src', 'https://kit.fontawesome.com/296e9763f7.js');
    // Append Bootstrap cdn to head for font asesome icons
    document.head.appendChild(bootstrapLink);
};
export { createElement, createTextElement, createLabelElement, createImageElement, createSelectElement, loadBootstrap, getCurrentFile };
