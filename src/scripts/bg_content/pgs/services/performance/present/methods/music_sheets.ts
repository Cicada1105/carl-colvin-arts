/*
	This file is for handlings the methdos used for
	creating the individual music sheets and the
	pages that the sheets consist of
*/
// Imports
//	Global
import { createElement, createTextElement, createImageElement } from '../../../../../../global/methods/elements';
//	Local
import { SongInterface } from '../interfaces';

let NUM_MUSIC_SHEETS:number = 0;
const createSheetMusic = (sheets:SongInterface[]):HTMLDivElement => {
	let sheetMusicCont:HTMLDivElement = createElement({
		idName:"sheetMusicCont"
	});

	NUM_MUSIC_SHEETS = sheets.length;
	if (NUM_MUSIC_SHEETS !== 0) {
		let currPage:number = 0;

		while(currPage < NUM_MUSIC_SHEETS) {
			// Keep track of current pages
			let pages:SongInterface[] = [];

			// Check if current page exists
			if (sheets[currPage]) {
				pages.push(sheets[currPage]);
				/*
					Check if next page exists and 
					if it's supposed to be the back of 
					the current page (right page -> currPage is odd)
				*/
				if ((currPage % 2 !== 0) && (sheets[currPage + 1])) {
					pages.push(sheets[currPage + 1]);
					currPage += 2;
				}
				else 
					currPage++;

				// Create music sheet based on pages
				let musicSheet:HTMLDivElement = createMusicSheet(pages);
				// Set z-index for proper stacking (not including first page)
				(currPage !== 1) && (musicSheet.style.zIndex = (NUM_MUSIC_SHEETS - currPage).toString());
				sheetMusicCont.appendChild(musicSheet);
			}
		}
	}
	else {
		sheetMusicCont.appendChild(createTextElement({
			element:"h2",
			idName:"noMusicHeader",
			text:"Sorry, no music today!"
		}));
	}

	return sheetMusicCont;
}
function createMusicSheet(songs:SongInterface[]):HTMLDivElement {
	let sheetCont:HTMLDivElement = createElement({
		className:"musicSheet"
	});

	// If sheet has two sides, include arrows for turning pages
	if (songs.length === 2) {
		songs.forEach((song:SongInterface,index:number) => {
			let page:HTMLElement = createMusicPage(song);

			const IS_FRONT_PAGE:boolean = index === 0;

			// Create arrow and append to music page
			// First side has arrow pointing right, second side has arrow pointing left
			let turnPageArrow:HTMLElement = createElement({
				element: "i",
				className: `fas fa-reply ${IS_FRONT_PAGE ? "rightArrow" : "leftArrow"}`
			})
			let dummyArrow:HTMLSpanElement = createElement({
				element:"span",
				className:`${IS_FRONT_PAGE ? "rightArrow" : "leftArrow"}`
			})
			// Add event listener to arrow
			turnPageArrow.addEventListener("click",function(e:MouseEvent) {
				const path = e.composedPath();
				let musicPage:HTMLElement = path[1];
				let musicSheet:HTMLDivElement = path[2];

				// Set animation name of arrow depending on if its to turn the page left or right
				//musicSheet.style.animationName = IS_FRONT_PAGE ? "flipPageLeft" : "flipPageRight";
				musicSheet.style.transform = IS_FRONT_PAGE ? "rotateY(-180deg)" : "rotateY(0deg)";

				// Set backface of opposite page to visible
				let currentPageSibling:HTMLElement = (IS_FRONT_PAGE ? musicPage.nextElementSibling : musicPage.previousElementSibling) as HTMLElement;	
				setTimeout(() => {
					// Set backface of current page to hidden
					musicPage.style.backfaceVisibility = "hidden";
					currentPageSibling.style.backfaceVisibility = "visible";
					musicSheet.style.zIndex = (NUM_MUSIC_SHEETS - parseInt(musicSheet.style.zIndex)).toString();
				},1000);
			});

			page.appendChild(turnPageArrow);

			sheetCont.appendChild(page)
		});
	}
	else 
		sheetCont.appendChild(createMusicPage(songs[0]));
	
	return sheetCont;
}
function createMusicPage(song:SongInterface):HTMLElement {
	let musicPage:HTMLElement = createElement({
		element:"article",
		className:"musicPage"
	})

	let songTitle:HTMLHeadingElement = createTextElement({
		element:"h1",
		text:song["name"],
		className:"songTitle"
	});
	let songComposer:HTMLHeadingElement = createTextElement({
		element:"h4",
		text:song["by"],
		className:"songComposer"
	})
	let songDescriptionCont:HTMLDivElement = createMusicDescription(song["description"]);

	// Append song title, composer and description to sheet container
	musicPage.appendChild(songTitle);
	musicPage.appendChild(songComposer);
	musicPage.appendChild(songDescriptionCont);

	return musicPage;
}
function createMusicDescription(desc:string):HTMLDivElement {
	let descCont:HTMLDivElement = createElement({className:"musicDescCont"});

	let descEl:HTMLParagraphElement = createTextElement({
		text:desc
	});

	/*
		If description overflow height > height of container
			- Remove align-center property (Prevents users from seeing top of overflowed text)
	*/
	const pContHeight:number = 134;
	// Create mutation observer to watch for changes of this element to get accurate scroll height reading
	const observer:MutationObserver = new MutationObserver(function(mutList,observer) {
		// Only one type and one attribute is being observed, so checks don't need to be made for these properties
		const mutationRecord:MutationRecord = mutList[0];
		const addedNodeList:NodeList = mutationRecord["addedNodes"];
		const node:HTMLElement = <HTMLElement>addedNodeList[0]; // Holds the div#musicStandCont

		// Query node for description paragraphs
		const musicDescContainers:HTMLCollection = node.getElementsByClassName("musicDescCont");
		/*
			Loop through the music description containers, accessing the description paragraph 
			and checking each overflow height accordingly
		*/
		for (const descCont of musicDescContainers) {
			let descEl:HTMLParagraphElement = descCont.getElementsByTagName("p")[0];

			if (descEl.scrollHeight > pContHeight)
				descEl.style.alignItems = "flex-start";
		}

		// Disconnect ovserver
		observer.disconnect();
	});
	observer.observe(document.body,{
		childList: true
	});

	let trebleCleff:HTMLElement = createImageElement({
		src:"../../../resources/pg_imgs/performance/treble-clef.png",
		alt:"Treble Cleff"
	});

	descCont.appendChild(trebleCleff);
	descCont.appendChild(descEl);

	return descCont;
}

export { 
	createSheetMusic, createMusicSheet, 
	createMusicPage, createMusicDescription 
}