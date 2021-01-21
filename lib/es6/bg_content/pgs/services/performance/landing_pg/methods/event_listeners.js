// File for handling events of the performance landing page
export function init() {
    //	Store value of 'this' which is bounded as the svg parent element
    const svg = this;
    // DOM Constants
    const center_img = svg.getElementsByTagName("image")[0];
    const center_img_default = svg.getElementsByTagName("image")[1];
    const lgCircle = svg.getElementsByTagName("circle")[0];
    const smCircle = svg.getElementsByTagName("circle")[1];
    const arrows = document.getElementsByClassName("arrow");
    // Numeric constaants
    //SVG_PROPS.init();
    const BASE_ARROW_FONT_SIZE = 1.2178619756427604; // 3 / 2.4633333333333334 => scaling from 300x300 canvase to browser size that =
    /* Multiply svg coordinates by SVG_CONVERSION to get actual screen pixels*/
    //   svg is always 300x300, so coordinates need to be converted based on screen size
    let svgCTM = svg.getCTM();
    let SVG_CONVERSION = svgCTM.a;
    /*OVERWRITTEN DATA*/
    let text1, text2;
    let setFillSector;
    let distance;
    let sectorLink;
    /*EVENT HANDLER*/
    const sectorClickHandler = () => {
        window.open(sectorLink, "_top");
    };
    return {
        MouseoverHandler: function (e) {
            if ((e.relatedTarget) && ((e.relatedTarget.localName === "i") || (e.relatedTarget.localName === "text"))) {
                /* Exiting from arrow, entering over sector */
            }
            else {
                // Store value of 'this'
                const that = this;
                const sector = that.sector;
                const arrowNum = (that.arrow["num"]);
                sectorLink = (that.arrow["link"]);
                const imageLink = that.imageSrc;
                //	Access text
                text1 = sector.nextElementSibling;
                text2 = text1.nextElementSibling;
                center_img_default.style.animationName = "blurImage";
                center_img.style.animationName = "unBlurImage";
                setFillSector = sector.firstElementChild;
                setFillSector.beginElement();
                center_img.setAttribute("href", imageLink.path);
                center_img.setAttribute("alt", imageLink.alt);
                //	Display text
                text1.style.display = "block";
                text2.style.display = "block";
                // Add click listener to to direct user to respective page
                text1.addEventListener("click", sectorClickHandler, {
                    once: true
                });
                text2.addEventListener("click", sectorClickHandler, {
                    once: true
                });
                // Display arrow
                let arrow = arrows[arrowNum];
                //   Update svg conversion
                svgCTM = svg.getCTM();
                SVG_CONVERSION = svgCTM.a;
                arrow.style.fontSize = `${SVG_CONVERSION * BASE_ARROW_FONT_SIZE}rem`;
                arrow.style.display = "initial";
                // Add click listener to to direct user to respective page
                arrow.addEventListener("click", sectorClickHandler, {
                    once: true
                });
            }
        },
        MouseoutHandler: function (e) {
            if ((e.relatedTarget) && ((e.relatedTarget.localName === "i") || (e.relatedTarget.localName === "text"))) {
                /* Hovering over arrow or hover text */
            }
            else {
                // Store value of 'this'
                const that = this;
                const sector = that.sector;
                const arrowNum = that.arrow["num"];
                sectorLink = that.arrow["link"];
                //	Access text
                text1 = sector.nextElementSibling;
                text2 = text1.nextElementSibling;
                //   Update svg conversion
                svgCTM = svg.getCTM();
                SVG_CONVERSION = svgCTM.a;
                center_img_default.style.animationName = "unBlurImage";
                center_img.style.animationName = "blurImage";
                setFillSector = sector.lastElementChild;
                setFillSector.beginElement();
                // Remove current displayed arrow
                let arrow = arrows[arrowNum];
                arrow.style.display = "none";
                // Remove arrow click listener
                arrow.removeEventListener("click", sectorClickHandler, false);
                //	Remove text
                text1.style.display = "none";
                text2.style.display = "none";
                // Remove text click listeners
                text1.removeEventListener("click", sectorClickHandler, false);
                text2.removeEventListener("click", sectorClickHandler, false);
            }
        }
    };
}
