/*
	Global methods shared by the entire project
*/

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
function createElement({element="div",className="",idName=""}):any|void {
  try {
    if (!className && !idName) 
      throw new TypeError("className or idName ommited. createElement requires either one.");

    let e:any = document.createElement(element);

    if (className)
      e.setAttribute('class',className);
    if (idName)
      e.setAttribute('id',idName);

    return e
  } catch(e) {
    console.log(e);
    return;
  }
}
function createTextElement({element="p",text="",...rest}):any|void {
  try {
    if (!text)
      throw new TypeError("'text' string omitted. createTextElement requires 'text' parameter");

    let el:any = document.createElement(element);

    if (rest.className)
      el.setAttribute('class',rest.className);
    if (rest.idName)
      el.setAttribute('id',rest.idName);

    let txt:string = text;
    let txtNode:any = document.createTextNode(txt);

    el.appendChild(txtNode);

    return el;
  } catch(e) {
    console.log(e);
  }
}
function createImageElement({src='',alt='', ...rest}) {
  try {
    if (!src)
      throw new TypeError("'src' parameter ommited. createImageElement requires 'src' parameter")

    let img:any = document.createElement('img');
    img.setAttribute('src',src);

    if (alt)
      img.setAttribute('alt',alt);
    if (rest.className)
      img.setAttribute('class',rest.className);
    if (rest.idName)
      img.setAttribute('id',rest.idName);

    return img;
  } catch(e) {
    console.log(e);
  }
}

export { getCurrentFile, createElement, createTextElement, createImageElement }