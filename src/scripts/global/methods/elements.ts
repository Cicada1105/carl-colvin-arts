/*
	Global element methods shared by the entire project
*/

// Imports
import { 
  IOptionGroup, IOption, InputRowType,
  IText, ITextArea, ISelect, IRange
} from '@global/interfaces/inputs'
import { IContactLink } from '@global/interfaces/general';

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
function createInputRow(inputRow:InputRowType):HTMLDivElement {
  try {
    // Input 'id' attribute must match the 'forIn' attribute for accessibility
    if ( inputRow.id !== inputRow['label'].forIn )
      throw new TypeError('Input "id" attribute must match the label "forIn" attribute.');

    const cont:HTMLDivElement = createElement({
      className: 'input-row'
    });

    const label:HTMLLabelElement = createLabelElement(inputRow['label']);

    // Append label and input to parent container
    cont.appendChild(label);

    // Create element based on the data type
    if ( 'type' in inputRow['data'] ) {
      let data:IText = inputRow['data'];
      let el:HTMLInputElement = createElement({
        element: 'input',
        idName: inputRow['id'],
        ...data
      });
      el.setAttribute('type',data['type']);
      el.setAttribute('placeholder',data['placeholder']);

      cont.appendChild(el);
    }
    else if ( 'min' in inputRow['data'] ) {
      let data:IRange = inputRow['data'];
      let el:HTMLInputElement = createElement({
        element: 'input',
        idName: inputRow['id']
      });
      el.setAttribute('type','number');
      if ( typeof data['min'] === 'string' ) {
        if ( data['min'].match(/[^0-9]/) ) {
          throw new TypeError(`Invalid attribute value passed in. Attribute "min": ${data['min']} must not contain a non-numberic character.`); 
        }
        else {
          el.setAttribute('min',data['min']);
        }
      }
      else {
        el.setAttribute('min',data['min'].toString());
      }
      if ( typeof data['max'] === 'string' ) {
        if ( data['max'].match(/[^0-9]/) ) {
          throw new TypeError(`Invalid attribute value passed in. Attribute "max": ${data['max']} must not contain a non-numberic character.`); 
        }
        else if ( parseInt(data['max']) < parseInt(<string>data['min']) ) {
          throw new RangeError(`Attribute "max":${data['max']} must be greater than attribute "min": ${data['min']}`);
        }
        else {
          el.setAttribute('max', data['max'])
        }
      }
      else {
        el.setAttribute('max', data['max'].toString());
      }

      cont.appendChild(el);
    }
    else if ( 'rows' in inputRow['data'] ) {
      let data:ITextArea = inputRow['data'];
      let el:HTMLTextAreaElement = createElement({
        element: 'textarea',
        idName: inputRow['id']
      });
      el.setAttribute('rows',data['rows']);
      el.setAttribute('cols',data['cols']);

      cont.appendChild(el);
    }
    else if ( 'options' in inputRow['data'] ) {
      let data:ISelect = inputRow['data'];
      let el:HTMLSelectElement = createSelectElement({
        idName: inputRow['id'],
        ...data
      });
      cont.appendChild(el);
    }
    else {
      throw new TypeError(
        'Unknown data type passed in. Properties ' +
        Object.keys(inputRow['data']).map(key => `"${key}"`).join(', ') +
        'are not assignable to existing input type.'
      )
    }

    return cont;
  } catch(e) {
    throw new Error(e);
  }
}
/*  Animated loading text   */
function createLoadingText():HTMLParagraphElement {
  const p:HTMLParagraphElement = document.createElement('p');
  p.setAttribute('class','loading-text');

  const loadingText:Text = document.createTextNode('Loading');
  p.appendChild(loadingText);

  const dotsCont:HTMLSpanElement = document.createElement('span');
  dotsCont.setAttribute('class','loading-dot-cont');

  const dot1:HTMLSpanElement = document.createElement('span');
  dot1.setAttribute('class', 'loading-dot1');
  const dot2:HTMLSpanElement = document.createElement('span');
  dot2.setAttribute('class', 'loading-dot2');
  const dot3:HTMLSpanElement = document.createElement('span');
  dot3.setAttribute('class', 'loading-dot3');

  dotsCont.appendChild(dot1);
  dotsCont.appendChild(dot2);
  dotsCont.appendChild(dot3);

  p.appendChild(dotsCont);

  return p;
}
/*   Fallback text when server is down   */
function createFallbackText(displayText:string, subDisplayText?:string):HTMLDivElement {
  // Container for holding fallback messages
  const cont:HTMLDivElement = document.createElement('div');
  cont.setAttribute('style','position:relative;color:#f0edee;text-align:center;margin:.83em auto;');

  // First display text
  const p:HTMLParagraphElement = document.createElement('p');
  p.setAttribute('style','font-size:1.5rem;');
  const fallbackText:Text = document.createTextNode(displayText);
  // Append text node to paragraph element
  p.appendChild(fallbackText);
  // Append element to the container
  cont.appendChild(p);

  if ( subDisplayText ) {
    const pSub:HTMLParagraphElement = document.createElement('p');
    pSub.setAttribute('style','font-size:1.25rem;');
    const fallbackSubText:Text = document.createTextNode(subDisplayText);
    // Append text node to paragraph element
    pSub.appendChild(fallbackSubText);

    // Append paragraph element to container
    cont.appendChild(pSub);
  }

  return cont;
}
// text, from 
function createContactLink(data:IContactLink):HTMLDivElement {
  // Create container for contact link text and button
  let cont:HTMLDivElement = createElement({
    idName:"contactLink"
  });

  // Create header for contact link 
  let linkText:HTMLHeadingElement = createTextElement({
    element:"h2",
    text: data["text"]
  });
  // Create arrow element to be used as "button" image
  let iBtn:HTMLElement = createElement({
    element:"i",
    className:"fas fa-chevron-right"
  });

  // Add event listener to iBtn to set session to send to contact page 
  iBtn.addEventListener("click",function() {
    // Set session storage to be "from" future performances 
    sessionStorage.setItem("from",data["from"]);
    data['message'] && sessionStorage.setItem('message', data['message']);
    // Navigate to contact page 
    window.location.assign(data["path"]);
  },{once:true})

  // Append text and arrow to contact container 
  cont.appendChild(linkText);
  cont.appendChild(iBtn);

  return cont;
}

export { 
  createElement, createTextElement, 
  createLabelElement, createImageElement, 
  createSelectElement, createInputRow,
  createLoadingText, createFallbackText,
  createContactLink
}
