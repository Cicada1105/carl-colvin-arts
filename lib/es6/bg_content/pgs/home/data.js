// Path to home collage images
const imagePaths = "./resources/pg_imgs/home_collage_imgs/";
// collageImages will hold data for each image and 
//	"post" data to be displayed when user clicks on image
const collageImages = [
    {
        imageData: {
            path: `${imagePaths}dank_haus_ungovernables.png`,
            alt: 'Dank Haus Ungovernables',
            caption: '',
            className: 'bottomMiddle'
        },
        postData: {
            header: "Dank Haus Ungovernables",
            content: "Carl Colvin performing with hip hop group Kao Ra Zen and the Ungovernables" +
                " at the Dank Haus in Chicago."
        }
    },
    {
        imageData: {
            path: `${imagePaths}dank_haus_kenya_spoken_word.png`,
            alt: 'Dank Hause Kenya Spoken Word',
            caption: '',
            className: 'bottomRight'
        },
        postData: {
            header: "Dank Hause Kenya Spoken Word",
            content: "Carl Colvin performing with spoken word artist and art curator Kenya Fulton " +
                "at the Dank Haus in Chicago."
        }
    },
    {
        imageData: {
            path: `${imagePaths}happy_holy_dayz.png`,
            alt: 'Happy Holy Dayz annual Chicago Hiphop Festival',
            caption: '',
            className: 'topLeft'
        },
        postData: {
            header: "Happy Holy Dayz annual Chicago Hiphop Festival",
            content: "Carl Colvin performing with hip hop group Kao Ra Zen and the Ungovernables " +
                "at Hippy Holy Dayz, an annual hip hop festival in Chicago."
        }
    },
    {
        imageData: {
            path: `${imagePaths}rand_reeds.png`,
            alt: 'Random Reeds',
            caption: '',
            className: 'topRight'
        },
        postData: {
            header: "Random Reeds",
            content: "[Random Reeds description]"
        }
    },
    {
        imageData: {
            path: `${imagePaths}reed_scraping_types.png`,
            alt: 'Types of reed scraping',
            caption: '',
            className: 'bottomLeft'
        },
        postData: {
            header: "Types of Reed Scrapping",
            content: "[Description of types of reed scrapping]"
        }
    },
    {
        imageData: {
            path: `${imagePaths}flight_poem.png`,
            alt: 'Flight Poem published in Z Publishing\'s "America\'s Best Emerging Poets" anthology',
            caption: '',
            className: 'topMiddle'
        },
        postData: {
            header: "Flight Poem by Carl Colvin",
            content: 'Flight Poem published in Z Publishing\'s "America\'s Best Emerging Poets" anthology'
        }
    }
];
export { collageImages };
