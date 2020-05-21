// Path to home collage images
const imagePath = "./resources/pg_imgs/home_collage_imgs/";
// collageImages will hold data for each image and 
//	"post" data to be displayed when user clicks on image
const collageImages = [
    {
        imageData: {
            path: `${imagePath}fathers_touch_poem.png`,
            alt: 'A Father\'s Touch poem',
            caption: '[A Father\'s Touch partial description]',
            className: 'leftTop'
        },
        postData: {
            header: 'A Father\'s Touch',
            content: '[A Father\'s Touch full description]'
        }
    },
    {
        imageData: {
            path: `${imagePath}reed_scraping_types.png`,
            alt: 'Types of reed scraping',
            caption: '[Reed scraping partial description]',
            className: 'middleTop'
        },
        postData: {
            header: "Types of Reed Scraping",
            content: "[Reed scraping full description]"
        }
    },
    {
        imageData: {
            path: `${imagePath}dank_haus_spoken_word.png`,
            alt: 'Dank Hause Kenya Spoken Word',
            caption: '[Spoken Word partial description]',
            className: 'rightTop'
        },
        postData: {
            header: "Dank Hause Kenya Spoken Word",
            content: "Carl Colvin performing with spoken word artist and art curator Kenya Fulton " +
                "at the Dank Haus in Chicago."
        }
    },
    {
        imageData: {
            path: `${imagePath}dank_haus_ungovernables.png`,
            alt: 'Dank Haus Ungovernables',
            caption: '[Ungovernables partial description]',
            className: 'middleSecond'
        },
        postData: {
            header: "Dank Haus Ungovernables",
            content: "Carl Colvin performing with hip hop group Kao Ra Zen and the Ungovernables" +
                " at the Dank Haus in Chicago."
        }
    },
    {
        imageData: {
            path: `${imagePath}happy_holy_dayz.png`,
            alt: 'Happy Holy Dayz annual Chicago Hiphop Festival',
            caption: '[Chicago Hiphop Festival partial description]',
            className: 'leftMiddle'
        },
        postData: {
            header: "Happy Holy Dayz annual Chicago Hiphop Festival",
            content: "Carl Colvin performing with hip hop group Kao Ra Zen and the Ungovernables " +
                "at Hippy Holy Dayz, an annual hip hop festival in Chicago."
        }
    },
    {
        imageData: {
            path: `${imagePath}oboe_sheet_music.png`,
            alt: 'Oboe on sheet music',
            caption: '[Oboe on sheet music partial description]',
            className: 'middleThird'
        },
        postData: {
            header: 'Oboe Sheet Music',
            content: '[Oboe on sheet music full description]'
        }
    },
    {
        imageData: {
            path: `${imagePath}take_my_hand_poem.png`,
            alt: 'Take My Hand poem',
            caption: '[Take my hand poem partial description]',
            className: 'rightBottom'
        },
        postData: {
            header: "Take My Hand",
            content: '[Take My Hand Poem by Carl Colvin full description]'
        }
    },
    {
        imageData: {
            path: `${imagePath}english_horn_sheet_music.png`,
            alt: 'English horn on sheet music',
            caption: '[English horn on sheet music partial description]',
            className: 'leftBottom'
        },
        postData: {
            header: 'English Horn Sheet Music',
            content: '[English horn on sheet music full description]'
        }
    },
    {
        imageData: {
            path: `${imagePath}rand_reeds.png`,
            alt: 'Random Reeds',
            caption: '[Random reeds partial description]',
            className: 'middleBottom'
        },
        postData: {
            header: "Random Reeds",
            content: "[Random Reeds full description]"
        }
    }
];
export { collageImages };
