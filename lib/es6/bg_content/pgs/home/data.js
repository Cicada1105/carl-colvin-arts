const IMG_PATH = "./resources/home_imgs/";
// Use during development
const ROOT_PGS_DIR = "file:///Users/joshuacolvin/Desktop/carl-colvin-arts/dist/pgs/";
// Use during production
//const ROOT_PGS_DIR:string = "/pgs/";
const Rows = [
    {
        infoData: {
            header: "About",
            link: `${ROOT_PGS_DIR}about.html`,
            content: "Carl Colvin is a freelance musician, teacher, writer, and " +
                "editor originally from Chicago, Illinois and now recently residing " +
                "in the Cincinnati, Ohio area."
        },
        imgData: {
            path: IMG_PATH + "carl_headshot.png",
            alt: "Carl Headshot",
            caption: "Carl Headshot"
        }
    },
    {
        infoData: {
            header: "Listen",
            link: `${ROOT_PGS_DIR}listen.html`,
            content: "Listen to carl's best moooosic"
        },
        imgData: {
            path: IMG_PATH + "oboe_performance.png",
            alt: "Carl Performing Oboe",
            caption: "Performing with spoken word artist and art curator Kenya Fulton " +
                "at the Dank Haus in Chicago."
        }
    },
    {
        infoData: {
            header: "Services",
            link: `${ROOT_PGS_DIR}services/performance.html`,
            content: "Take part in carl's top tier services. 6 stars out of 5"
        },
        imgData: {
            path: IMG_PATH + "flight_poem.png",
            alt: "Flight Poem",
            caption: 'Flight: Poem written by Carl Colvin and published in Z Publishing\'s "America\'s Best Emerging Poets" anthology'
        }
    }
];
export { Rows };
