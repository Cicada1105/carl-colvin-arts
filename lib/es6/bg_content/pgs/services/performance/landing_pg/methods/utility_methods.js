function setSVGGraphicsAttributes(el, data) {
    data.fill && el.setAttribute("fill", data.fill);
    data.fillOpacity && el.setAttribute("fill-opacity", data.fillOpacity);
    data.stroke && el.setAttribute("stroke", data.stroke);
    data.strokeWidth && el.setAttribute("stroke-width", data.strokeWidth);
    data.strokeOpacity && el.setAttribute("stroke-opacity", data.strokeOpacity);
}
function setSVGTimingAttributes(el, data) {
    data.from && el.setAttribute("from", data.from);
    data.to && el.setAttribute("to", data.to);
    data.begin && el.setAttribute("begin", data.begin);
    data.end && el.setAttribute("end", data.end);
    data.fill && el.setAttribute("fill", data.fill);
    data.dur && el.setAttribute("dur", data.dur);
}
function setPrimitiveAttributes(el, data) {
    data.x && el.setAttribute("x", data.x);
    data.y && el.setAttribute("y", data.y);
    data.width && el.setAttribute("width", data.width);
    data.height && el.setAttribute("height", data.height);
}
function setCoreAttributes(el, data) {
    data.idName && el.setAttribute("id", data.idName);
    data.className && el.setAttribute("class", data.className);
}
function setAnimationElements(el, data) {
    if (data[0].idName) {
        let animations = data;
        animations.forEach(animation => el.appendChild(createSVGAnimate(animation)));
    }
    else {
        let sets = data;
        sets.forEach(set => el.appendChild(createSVGSet(set)));
    }
}
const createSVGSet = (data) => {
    let set = document.createElementNS("http://www.w3.org/2000/svg", "set");
    // Set attribute name to be changed by set element 
    set.setAttribute("attributeName", data.attributeName);
    // Add additional SVG Timing attributes if provided
    setSVGTimingAttributes(set, data);
    return set;
};
const createSVGAnimate = (data) => {
    let animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    // Set attribute name to be changed by animate element
    animate.setAttribute("attributeName", data.attributeName);
    // Add additional SVG Timing attributes if provided
    setSVGTimingAttributes(animate, data);
    // Add additional Core attributes if provided
    setCoreAttributes(animate, data);
    return animate;
};
export { setSVGGraphicsAttributes, setSVGTimingAttributes, setPrimitiveAttributes, setCoreAttributes, setAnimationElements };
