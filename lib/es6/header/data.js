// Use during development
const rootDir = "file:///Users/joshuacolvin/Desktop/carl-colvin-arts/dist/";
// Use during production
<<<<<<< HEAD
// const rootDir:string = "/";
const links = [
    {
        name: "Carl Colvin Arts",
        link: rootDir + "index.html",
=======
// const rootDir:string = "./";
const links = [
    {
        name: "Carl Colvin Arts",
        path: rootDir + "index.html",
>>>>>>> d059214a6136458e41404eee42c501a56b10346c
        subdirectories: []
    },
    {
        name: "About",
<<<<<<< HEAD
        link: rootDir + "pgs/about.html",
=======
        path: rootDir + "pgs/about.html",
>>>>>>> d059214a6136458e41404eee42c501a56b10346c
        subdirectories: []
    },
    {
        name: "Services",
<<<<<<< HEAD
        link: rootDir + "pgs/services/services.html",
        subdirectories: [
            {
                name: "Reedmaking",
                link: rootDir + "pgs/services/reedmaking.html",
=======
        path: rootDir + "pgs/services/services.html",
        subdirectories: [
            {
                name: "Reedmaking",
                path: rootDir + "pgs/services/reedmaking.html",
>>>>>>> d059214a6136458e41404eee42c501a56b10346c
                subdirectories: []
            },
            {
                name: "Editing",
<<<<<<< HEAD
                link: rootDir + "pgs/services/editing.html",
=======
                path: rootDir + "pgs/services/editing.html",
>>>>>>> d059214a6136458e41404eee42c501a56b10346c
                subdirectories: []
            },
            {
                name: "Writing",
<<<<<<< HEAD
                link: rootDir + "pgs/services/writing.html",
=======
                path: rootDir + "pgs/services/writing.html",
>>>>>>> d059214a6136458e41404eee42c501a56b10346c
                subdirectories: []
            },
            {
                name: "Performance",
<<<<<<< HEAD
                link: rootDir + "pgs/services/performance.html",
=======
                path: rootDir + "pgs/services/performance.html",
>>>>>>> d059214a6136458e41404eee42c501a56b10346c
                subdirectories: []
            },
        ]
    },
    {
        name: "Listen",
<<<<<<< HEAD
        link: rootDir + "pgs/listen.html",
=======
        path: rootDir + "pgs/listen.html",
>>>>>>> d059214a6136458e41404eee42c501a56b10346c
        subdirectories: []
    },
    {
        name: "Contact",
<<<<<<< HEAD
        link: rootDir + "pgs/contact.html",
=======
        path: rootDir + "pgs/contact.html",
>>>>>>> d059214a6136458e41404eee42c501a56b10346c
        subdirectories: []
    }
];
export { links };
