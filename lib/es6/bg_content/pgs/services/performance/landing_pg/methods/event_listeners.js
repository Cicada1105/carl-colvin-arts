// File for handling events of the performance landing page
export function init() {
    //	Store value of 'this' which is bounded as the svg parent element
    const svg = this;
    // DOM Constants
    const center_img = svg.getElementsByTagName("image")[0];
    const center_img_default = svg.getElementsByTagName("image")[1];
    const circle = svg.getElementsByTagName("circle")[0];
    const arrows = document.getElementsByClassName("arrow");
    //const noblurAnimation:SVGAnimationTransform = <SVGAnimationTransform>svg.getElementsByTagName("animate")[0];
    //const blurAnimation:SVGAnimationTransform = <SVGAnimationTransform>svg.getElementsByTagName("animate")[1];
    //const noblurAnimationDefault:SVGAnimationTransform = <SVGAnimationTransform>svg.getElementsByTagName("animate")[2];
    //const blurAnimationDefault:SVGAnimationTransform = <SVGAnimationTransform>svg.getElementsByTagName("animate")[3];
    // Numeric constaants
    const viewBox = svg.viewBox;
    const svgDim = {
        w: viewBox.baseVal.width,
        h: viewBox.baseVal.height
    };
    // Multiply svg coordinates by SVG_CONVERSION to get actual screen pixels
    // svg is always 300x300, so coordinates need to be converted based on screen size
    const SVG_CONVERSION = svg.clientWidth / svgDim.w;
    //const offset = (window.innerWidth - svg.clientWidth) / 2;
    const STROKE_WIDTH = parseInt(window.getComputedStyle(circle).strokeWidth);
    const OVERLAPPED_STROKE_WIDTH = STROKE_WIDTH / 2;
    const SVG_PROPS = {
        centerX: (svgDim.w / 2) * SVG_CONVERSION,
        centerY: (svgDim.h / 2) * SVG_CONVERSION,
        radius: (146 - OVERLAPPED_STROKE_WIDTH) * SVG_CONVERSION
    };
    const BASE_ARROW_FONT_SIZE = 1.2178619756427604; // 3 / 2.4633333333333334 => scaling from 300x300 canvase to browser size that =
    let text1, text2;
    return {
        MouseoverHandler: function (e) {
            // Store value of 'this'
            const that = this;
            const sector = that.sector;
            const arrowNum = (that.arrow["num"]);
            const arrowLink = (that.arrow["link"]);
            const imageLink = that.imageSrc;
            //	Access text
            text1 = sector.nextElementSibling;
            text2 = text1.nextElementSibling;
            if ((e.relatedTarget) && (e.relatedTarget.localName === "i")) {
                /* Exiting from arrow, entering over sector */
            }
            else {
                //	Display text
                text1.style.display = "block";
                text2.style.display = "block";
                center_img_default.style.animationName = "blurImage";
                center_img.style.animationName = "unBlurImage";
                let setFillSector = sector.firstElementChild;
                setFillSector.beginElement();
                center_img.setAttribute("href", imageLink.path);
                center_img.setAttribute("alt", imageLink.alt);
                let svgCTM = svg.getCTM();
                let arrow = arrows[arrowNum];
                arrow.style.fontSize = `${svgCTM.a * BASE_ARROW_FONT_SIZE}rem`;
                arrow.style.display = "initial";
                arrow.addEventListener("click", arrowClickHandler.bind(arrowLink));
            }
        },
        MouseoutHandler: function (e) {
            // Store value of 'this'
            const that = this;
            const sector = that.sector;
            const arrowNum = (that.arrow["num"]);
            //	Access text
            text1 = sector.nextElementSibling;
            text2 = text1.nextElementSibling;
            if ((e.relatedTarget) && (e.relatedTarget.localName === "i")) {
                /* Hovering over arrow */
                // Prevent sector text from display none
                //	Display text
                text1.style.display = "block";
                text2.style.display = "block";
            }
            else {
                if ((Math.pow(e.offsetY - SVG_PROPS.centerY, 2) + Math.pow(e.offsetX - SVG_PROPS.centerX, 2)) > Math.pow(SVG_PROPS.radius, 2))
                    center_img_default.style.animationName = "unBlurImage";
                center_img.style.animationName = "blurImage";
                let setFillSector = sector.lastElementChild;
                setFillSector.beginElement();
                center_img_default.setAttribute("href", "../../resources/pg_imgs/performance_imgs/carl_headshot.png");
                center_img.setAttribute("href", "");
                // Remove current displayed arrow
                let arrow = arrows[arrowNum];
                arrow.removeEventListener("click", arrowClickHandler);
                arrow.style.display = "none";
                //	Remove text
                text1.style.display = "none";
                text2.style.display = "none";
            }
        }
    };
}
const arrowClickHandler = function () {
    window.open(this, "_parent");
};
