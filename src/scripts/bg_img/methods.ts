// Creates svg to give background images an increasing fade affect
/*
	@param imgPath:string -> path where image is stored within project
	@param imgAlt:string -> string to be displayed when image is unavailable

	@return customSvg:any -> custom svg element that slowly increases fade
		from top to bottom
*/
const createImageFade = (imgPath:string,imgAlt:string):any => {
	// Create new svg element to add custom image to
	let customSvg:any = document.createElementNS('http://www.w3.org/2000/svg','svg');

	// Add id to ensure location on document
	customSvg.setAttribute('id','bgImage');
	// Add view box
	customSvg.setAttribute('viewBox','0 0 300 100');

	// Every svg has definitions for which is the content of the svg
	let defs:any = document.createElementNS('http://www.w3.org/2000/svg','defs');

	/*
		Background image to receive fade
	*/	
	// Add a filter which will be used for a custom image
	let filter:any = document.createElementNS('http://www.w3.org/2000/svg','filter');
	// Add an id to access filter when including it to the defined space
	filter.setAttribute('id','customImage');

	// Create a custom image that displays the image located at imgPath:string
	let customImg:any = document.createElementNS('http://www.w3.org/2000/svg', 'feImage');
	// Add the location of the image to the custom image tag
	customImg.setAttribute('href',imgPath);
	// Add alternative attribute in case image can't load
	customImg.setAttribute('alt',imgAlt);

	// Append custom image tag to the filter
	filter.appendChild(customImg);

	/*
		Fade gradient to add to the background image
	*/
	// Create a fill to add to the image to make it fade
	let imgGradient:any = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
	// Add id to linear gradient to use it as a fill
	imgGradient.setAttribute('id','customImageFade');
	// Set the fade to be 45 degrees; fade from top left to bottom right
	imgGradient.setAttribute('gradientTransform','rotate(45)');

	// Create stop tags to determine where fade should begin and end
	let imgStopStart:any = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
	let imgStopEnd:any = document.createElementNS('http://www.w3.org/2000/svg', 'stop');

	// Add offsets to stop tags
	imgStopStart.setAttribute('offset','0%');
	imgStopEnd.setAttribute('offset', '90%');
	// Add fade opcaity attribute to each
	imgStopStart.setAttribute('stop-opacity', '0.5'); // 80% opacity
	imgStopEnd.setAttribute('stop-opacity', '0.0'); // 0% opacity
	// Add color?
	imgStopStart.setAttribute('stop-color','aqua');
	imgStopEnd.setAttribute('stop-color','black');

	// Append stops to linear gradient
	imgGradient.appendChild(imgStopStart);
	imgGradient.appendChild(imgStopEnd);

	// Append the filter to the definitions tag
	defs.appendChild(filter);
	// Append fill to the definitions tag
	//defs.appendChild(imgGradient);
	
	// Create a rectangle tag that defines the area within the svg
	// 	that the filter is seen
	let viewArea:any = document.createElementNS('http://www.w3.org/2000/svg','rect');

	/*
		Svg View Area Attribute definitions
	*/
	viewArea.setAttribute('x','0');
	viewArea.setAttribute('y','0');
	viewArea.setAttribute('width','300');
	viewArea.setAttribute('height','100');

	// Add a fill for the image to fade
	//viewArea.setAttribute('fill','url(#customImageFade)');
	// Add a filter to the rectangle to display the custom image filter created above
	viewArea.setAttribute('filter','url(#customImage)');

	//	Append definitions tag and rectangle tag to svg
	customSvg.appendChild(defs);
	customSvg.appendChild(viewArea);

	// Return svg 
	return customSvg;
}

export { createImageFade }