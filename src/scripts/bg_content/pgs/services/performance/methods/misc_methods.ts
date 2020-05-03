/*
	Additional methods that are not for creating 
	DOM nodes but are additional to page function
*/

const activateCurtains = ():void => {
	// Locate curtains
	let curtains = document.getElementsByClassName("curtains");
	// Page loading will mimic the click event
	let clickEvent = new Event("click");

	// Activate click event for each curtain container
	for (let val of curtains) {
		val.dispatchEvent(clickEvent);
	}
}

export { activateCurtains }