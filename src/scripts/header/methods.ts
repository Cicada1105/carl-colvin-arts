// This file is used to display navigation 

// Imports
// global
import { ILink } from '../global/interfaces/general'
import { 
  CartAction, UpdateCartPayload, 
  AddReedInterface, UpdateReedInterface, DeleteReedInterface 
} from '../global/interfaces/cart'
import { createElement, createTextElement } from '../global/methods/elements'
import { getCurrentFile } from '../global/methods/utilities'
// local
import { links } from './data'
import { updateCartListener } from './listeners'

// Current page user is on
const CURRENT_PATH:string = getCurrentFile();
// Mobile width
const MOBILE_DEVICE_MAX_WIDTH:number = 664;

let createNavigation = ():any => {
  // Create new ul element
  let navUl:HTMLUListElement = createElement({element:'ul',idName:'navigation'});

  // First link does not need to be looped through -> Home page link floated to left side
  // Prevent excessive checking on each link
  let homeData:ILink = links[0];
  let homeLi:HTMLLIElement = createTextElement({element:'li',text:homeData.name, idName:'homeLink'});
  homeLi.addEventListener("click",() => {
    window.open(homeData.link, "_self");
  });
  navUl.appendChild(homeLi);

  // Create container to hold page links to be manipulated for page responsiveness
  let linksCont:HTMLDivElement = createPageLinksCont(links.slice(1)); // Returns array without first element
  // Append container to ul
  navUl.appendChild(linksCont);

  // Add cart icon and listener
  let cartListItem:HTMLLIElement = createElement({element:'li',idName:'cartLink'});

  let cartIcon:HTMLSpanElement = createElement({
    element: 'span',
    className: 'fa-solid fa-cart-shopping'
  });
  let cartItems:HTMLParagraphElement = createTextElement({ 
    text: '0',
    idName: 'cartQty'
  });

  cartListItem.appendChild(cartIcon);
  cartListItem.appendChild(cartItems);
  navUl.appendChild(cartListItem);

  // Initialize cart if it does not already exixt
  if ( !sessionStorage.getItem('cca-reed-cart') ) {
    sessionStorage.setItem('cca-reed-cart',JSON.stringify([]));
  }
  else {
    // Update number of items in the cart if it exists
    let cartItemsCount:number = JSON.parse(sessionStorage['cca-reed-cart']).length
    cartItems.innerText = cartItemsCount.toString();
  }

  document.addEventListener('OnUpdateCart',function(e: Event) {
    if ( 'detail' in e ) {
      const cartQty:HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('cartQty');
      let cartPayload: UpdateCartPayload = e['detail'] as UpdateCartPayload;
      let numItemsInCart:number = parseInt(cartQty.innerText) || 0;
      let notif:string = '';

      if ( cartPayload.action === CartAction.Add) {
        cartQty.innerText = ( numItemsInCart + 1 ).toString();
        updateCartListener<AddReedInterface>(e);
        notif = 'Successfully added to cart!';
      }
      else if ( cartPayload.action === CartAction.Delete ) {
        cartQty.innerText = ( numItemsInCart - 1 ).toString();
        updateCartListener<DeleteReedInterface>(e);
        notif = 'Successfully updated cart!';
      }
      else if ( cartPayload.action === CartAction.Update ) {
        updateCartListener<UpdateReedInterface>(e);
        notif = 'Successfully removed item from cart!';
      }
      alert(notif);
    }
  });

  // Create "hamburger" element for when screen is too small
  let barsListItem:HTMLLIElement = createElement({
    element:'li',
    idName:'menuHamburger'
  });
  let bars:HTMLElement = createElement({
    element: "i",
    className: "fas fa-bars"
  });
  barsListItem.addEventListener("click",() => {
    linksCont.style.display = linksCont.style.display === "block" ? "none" : "block";
  });
  barsListItem.appendChild(bars);

  // Create listeners to reset navigation display to combat final state being kept from user clicking on bars
  const desktopReset:any = () => {
    if (window.innerWidth > MOBILE_DEVICE_MAX_WIDTH) {
      linksCont.style.display = "inline-block";

      window.removeEventListener("resize",desktopReset);
      window.addEventListener("resize",mobileReset);
    }
  }
  const mobileReset:any = () => {
    if (window.innerWidth <= MOBILE_DEVICE_MAX_WIDTH) {
      linksCont.style.display = "none";

      window.removeEventListener("resize",mobileReset);
      window.addEventListener("resize",desktopReset);
    }
  }
  // Set initial listener for window
  window.addEventListener("resize",(window.innerWidth > MOBILE_DEVICE_MAX_WIDTH ? mobileReset : desktopReset));
  
  // Append bars to ul
  navUl.appendChild(barsListItem);

  // Return ul node to be added to the header
  return navUl;
}

const createPageLinksCont = (pageLinks:Array<ILink>):HTMLDivElement => {
  let linksCont:HTMLDivElement = createElement({
    idName:"linksCont"
  });

  // Current link of type ILink
  let currLiData:ILink;
  for(let i = 1; i < links.length; i++) { // Start at 1, skipping over first as it is previously handled
    currLiData = links[i];
    // Create li for current link
    let currLi:HTMLLIElement;

    // Check if current file matches a link (equivalent => 0)
    if (CURRENT_PATH.localeCompare(currLiData.name.toLowerCase()) === 0)
      // Add attribute to current li to signify it is the active link
      currLi = createTextElement({element:'li',text:currLiData.name, idName:'active'});
    else 
      currLi = createTextElement({element:'li',text:currLiData.name});

    // Store path of current link to use in event listener
    let linkPath:string = currLiData.link;

    // Add event listener for when link is clicked on
    currLi.addEventListener("click",() => {
      window.open(linkPath,"_self");
    });

    // Current link could either have null subdirectories or an array of ILink objects
    if ((currLiData.subdirectories != null) && (currLiData['subdirectories'].length > 0)) {
      // Create new ul for subdirectories
      let subdirectoryUl:any = createSubdirectory(currLiData.subdirectories);

      // Append ul subdirectory to li main directory element
      currLi.appendChild(subdirectoryUl);
    }

    /*
        parentElement.insertBefore(element1, element2)

        Goes to parentElement and inserts element1 before
        element 2
    */
    // Floating li's to the right causes navigation to be displayed
    //  backwards when using appendChild.
    //linksCont.insertBefore(currLi, linksCont.childNodes[0]);
    linksCont.appendChild(currLi);
  }

  return linksCont;
}

const createSubdirectory = (dirs:Array<ILink>):HTMLUListElement => {
  // Create UL to contain LI's 
  let subUl:HTMLUListElement = createElement({element:'ul',className:'subDir'});

  for (let dir of dirs) {
    // Create LI element for current subdirectory
    let currSubLi:HTMLLIElement;

    if (CURRENT_PATH.localeCompare(dir.name.toLowerCase()) == 0) {
      // Add active attribute to current li
      currSubLi = createTextElement({element:'li',text:dir.name,idName:'active'});
    }
    else {
      currSubLi = createTextElement({element:'li',text:dir.name});
    }

    let subLink:string = dir.link;
    // Add event listener
    currSubLi.addEventListener("click", (event:any) => {
      event.stopPropagation();
      window.open(subLink,"_self");
    })
    // Append current li element to subdirectory ul
    subUl.appendChild(currSubLi);
  }

  return subUl;
}

export { createNavigation }