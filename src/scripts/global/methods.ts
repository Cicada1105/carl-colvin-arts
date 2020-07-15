/*
	Global methods shared by the entire project
*/

// Imports
import { IOptionGroup, IOption } from './interfaces/inputs'

const getCurrentFile = ():string => {
  // Get current path location
	let pathName:string = window.location.pathname;

  // Split location path to extract file name
	let pathArray:string[] = pathName.split("/");

  // Last element will contain file name with extension
  let currPg:string = pathArray[pathArray.length - 1];

  // Remove extension '.html' = length of currPg(up to but not including) - 5(length of .html)
  let fileName = currPg.slice(0,(currPg.length - 5));

  return fileName;
}
function createElement({element="div",className="",idName=""}):any {
  try {
    if (!className && !idName) 
      throw new TypeError("className or idName parameter ommited. createElement requires either one.");

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
function createTextElement({element="p",text="",...rest}):any {
  try {
    if (!text)
      throw new TypeError("'text' parameter omitted. createTextElement requires 'text' parameter");

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
    return;
  }
}
function createLabelElement({text="", forIn="", ...rest}):any {
  try {
    if (!text)
      throw new TypeError("'text' parameter omitted. createLabelElement requires 'text' parameter");
    if (!forIn)
      throw new TypeError("'for' parameter omitted. createLabelElement requires 'for' parameter\n");

    let label:HTMLLabelElement = document.createElement("label");

    if (rest.className) 
      label.setAttribute("class", rest.className);
    if (rest.idName)
      label.setAttribute("id", rest.idName);

    label.setAttribute("for", forIn);

    let txt:string = text;
    let txtNode:any = document.createTextNode(txt);

    label.appendChild(txtNode);

    return label;
  } catch(e) {
    console.log(e);
    return;
  }
}
function createImageElement({src='',alt='', ...rest}):any {
  try {
    if (!src)
      throw new TypeError("'src' parameter ommited. createImageElement requires 'src' parameter")

    let img:HTMLImageElement = document.createElement('img');
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
    return;
  }
}
const createSelectElement = ({options=[{}], ...rest}):any => {
  try {
    if (options.length == 1) // initial array needs empty object (length == 1)
      throw new TypeError("'options' parameter omitted. createSelectElement requires 'options' parameter");

    let selectEl:HTMLSelectElement = document.createElement('select');

    if (rest.className)
      selectEl.setAttribute("class", rest.className);
    if (rest.idName)
      selectEl.setAttribute("id", rest.idName);

    // Include default options
    let defaultOpt:HTMLOptionElement = createTextElement({
      element: "option",
      text: "-Select-"
    });
    defaultOpt.setAttribute("value","none");
    selectEl.appendChild(defaultOpt);

    if (options.every(opt => opt.hasOwnProperty("label"))) {
      let opts:IOptionGroup[] = <IOptionGroup[]>options;

      opts.forEach((group:IOptionGroup) => {
        let groupEl:HTMLOptGroupElement = document.createElement("optgroup");
        groupEl.setAttribute("label", group.label);

        group.options.forEach((opt:IOption) => {
          let el:HTMLOptionElement = document.createElement("option");
          el.setAttribute("value", opt.value);

          let txt:string = opt.display;
          let txtNode:Text = document.createTextNode(txt);

          el.appendChild(txtNode);

          groupEl.appendChild(el);
        })

        selectEl.appendChild(groupEl);
      });

    }
    else {
      let opts:IOption[] = <IOption[]>options;
      
      opts.forEach((opt:IOption) => {
        let el:HTMLOptionElement = document.createElement("option");
        el.setAttribute("value", opt.value);

        let txt:string = opt.display;
        let txtNode:Text = document.createTextNode(txt);

        el.appendChild(txtNode);

        selectEl.appendChild(el);
      });

    }

    return selectEl;
  } catch(e) {
    console.log(e);
    return;
  }
}
const loadBootstrap = ():void => {
  // Create link tag for Bootstrap Font Awesome icons
  let bootstrapLink:any = document.createElement('script');
  // Add href attribute
  bootstrapLink.setAttribute('src','https://kit.fontawesome.com/296e9763f7.js');

  // Append Bootstrap cdn to head for font asesome icons
  document.head.appendChild(bootstrapLink);
}

export { 
  createElement, createTextElement, 
  createLabelElement, createImageElement, 
  createSelectElement,
  loadBootstrap, getCurrentFile }
