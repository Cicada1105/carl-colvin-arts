"use strict";
const init = () => {
    createGradient();
    createNavigation();
};
const createGradient = () => {
    console.log("createGradient Running");
    const cvsEl = document.createElement("canvas");
    cvsEl.setAttribute("id", "bgCanvas");
    document.body.appendChild(cvsEl);
    const cvs = document.getElementById("bgCanvas");
    let ctx = cvs.getContext('2d');
    let grd = ctx.createLinearGradient(0, 0, 300, 150);
    // Create color stops
    grd.addColorStop(0, "#340604");
    grd.addColorStop(1, "black");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 300, 150);
};
const createNavigation = () => {
    console.log("createNavigation Running");
    const navigation = [
        {
            name: "About",
            subdirectories: []
        },
        {
            name: "Services",
            subdirectories: [
                {
                    name: "Reedmaking",
                    subdirectories: {}
                },
                {
                    name: "Editing",
                    subdirectories: {}
                },
                {
                    name: "Writing",
                    subdirectories: {}
                },
                {
                    name: "Performance",
                    subdirectories: {}
                },
            ]
        },
        {
            name: "Listen",
            subdirectories: []
        },
        {
            name: "Contact",
            subdirectories: []
        }
    ];
    let pathName = window.location.pathname;
    let pathArray = pathName.split("/");
    console.log(pathArray[6]);
};
