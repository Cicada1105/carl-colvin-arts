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
export { createNavigation };
