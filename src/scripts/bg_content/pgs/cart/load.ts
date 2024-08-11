// Imports
//  methods
import { createCartRow } from './create'
import { createTextElement } from '../../../global/methods/elements'
//  interfaces
import { ReedStorageItem } from '../../../global/interfaces/cart'

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

    cart.forEach((item:ReedStorageItem) => createCartRow(item))
  }
  else {
    let emptyCartMessage:string = 'Your cart is empty! \n Checkout the reedmaking page for items to purchase.';
    let emptyCartEl:HTMLHeadingElement = createTextElement({
      element: 'h2',
      idName: 'emptyCart',
      text:emptyCartMessage
    });
    document.body.appendChild(emptyCartEl);
  }
}

export { loadHeader, loadCartLayout }