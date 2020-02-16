const getCurrentFile = ():string => {
  // Get current path location
	let pathName:string = window.location.pathname;

  // Split location path to extract file name
	let pathArray:string[] = pathName.split("/");

  // Last element will contain file name with extension
  let currPg:string = pathArray[pathArray.length - 1];

  // Remove extension '.html' = length of currPg(up to but not including) - 5(length of .html)
  let fileName = currPg.slice(0,(currPg.length - 5));

  return fileName
}

export { getCurrentFile }