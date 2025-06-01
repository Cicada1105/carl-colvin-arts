// Imports
//  methods
import { createCartRow } from './create'
import { createTextElement, createContactLink } from '@global/methods/elements'
//  interfaces
import { ReedStorageItem } from '@global/interfaces/cart'
import { IContactLink } from '@global/interfaces/general'

const loadHeader = () => {
  let hgroup:HTMLElement = document.createElement('hgroup');

  // Create header
  let header:HTMLHeadingElement = createTextElement({
    element:"h1",
    idName:"cartHeader",
    text:"Cart"
  });

  // Create intro
  let intro:HTMLParagraphElement = createTextElement({
      text:"View and update your reedmaking cart"
  });

  // Append header and intro to header group
  hgroup.appendChild(header);
  hgroup.appendChild(intro);

  document.body.appendChild(hgroup);
}
const loadCartLayout = () => {
  // Retrieve cart from session storage
  if ( sessionStorage['cca-reed-cart'] && JSON.parse(sessionStorage['cca-reed-cart']).length > 0 ) {
    let cart:ReedStorageItem[] = JSON.parse(sessionStorage['cca-reed-cart']);

    let formattedMsg:string = '';
    cart.forEach((item:ReedStorageItem) => {
      createCartRow(item);
      // Format message
      formattedMsg += `${item['quantity']}x ${item['name']}\n\n`;
    });
    
    let linkData:IContactLink = {
      text: "Checkout",
      from: "cart",
      path: "./contact.html",
      message: formattedMsg
    }
    let contactLinkCont:HTMLDivElement = createContactLink(linkData);
    document.body.appendChild(contactLinkCont);
  }
  else {
    let emptyCartMessage:string = 'Your cart is empty! \n Checkout the reedmaking page for items to purchase.';
    let emptyCartEl:HTMLHeadingElement = createTextElement({
      idName: 'emptyCart',
      text:emptyCartMessage
    });
    document.body.appendChild(emptyCartEl);
  }
}

export { loadHeader, loadCartLayout }