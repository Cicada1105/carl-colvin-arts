// Imports
//  methods
import { createElement, createInputRow } from '@global/methods/elements'
//  interfaces
import { 
  CustomEventProps, CartAction,
  UpdateReedInterface, DeleteReedInterface,
  ReedStorageItem
} from '@global/interfaces/cart'

const createCartRow = (data:ReedStorageItem):void => {
  let name:string = data['name'];
  let cost:number = data['cost'];
  let id:string = name.toLowerCase().split(' ').join('-');
  let displayText:string = `${name} - $${cost}`;
  let el:HTMLDivElement = createInputRow({
    id,
    label: {
      text: displayText.concat(data['category'] ? ` (${data['category']})` : ''),
      forIn: id
    },
    data:{
      min: 1,
      max: 99
    }
  });
  /**********************/
  /*  Custom input box  */
  /**********************/
  let input:HTMLInputElement = <HTMLInputElement>el.querySelector('input[type="number"]');
  input.setAttribute('value',data['quantity'].toString());

  let cont:HTMLDivElement = createCustomNumberInput(input);

  el.appendChild(cont);

  /***********************/
  /*   Create controls   */
  /***********************/
  let controlsCont:HTMLDivElement = createElement({
    className: 'controlsCont'
  });
  /*  Update cart item button  */
  let updateItemBtn:HTMLButtonElement = createElement({
    element: 'button',
    className: 'updateItemBtn'
  });
  let updateIcon:HTMLElement = createElement({
    element: 'i',
    className: 'fa-solid fa-check'
  });
  updateItemBtn.appendChild(updateIcon);
  updateItemBtn.addEventListener('click',function(e:MouseEvent) {
    let quantity:number = parseInt(input.value || '0');
    let eventData:CustomEventProps<UpdateReedInterface> = {
      bubbles: true,
      detail: {
        action: CartAction.Update,
        id: data['id'],
        quantity
      }
    }
    let event:CustomEvent<UpdateReedInterface> = new CustomEvent('OnUpdateCart',eventData);
    document.dispatchEvent(event);
  },{ once: true });
  /*  Delete cart item button  */
  let deleteItemBtn:HTMLButtonElement = createElement({
    element: 'button',
    className: 'deleteItemBtn'
  });
  let deleteIcon:HTMLElement = createElement({
    element: 'i',
    className: 'fa-solid fa-xmark'
  });
  deleteItemBtn.appendChild(deleteIcon);
  deleteItemBtn.addEventListener('click',function(e:MouseEvent) {
    let eventData:CustomEventProps<DeleteReedInterface> = {
      bubbles:true,
      detail: {
        action: CartAction.Delete,
        id: data['id']
      }
    }
    let event:CustomEvent<DeleteReedInterface> = new CustomEvent('OnUpdateCart',eventData);
    document.dispatchEvent(event);
  },{ once: true });
  
  // Add update and delete button to the controls container
  controlsCont.appendChild(updateItemBtn);
  controlsCont.appendChild(deleteItemBtn);
  // Add control container to the input row container
  el.appendChild(controlsCont);

  document.body.appendChild(el);
}
const createCustomNumberInput = (inputEl:HTMLInputElement):HTMLDivElement => {
  let cont:HTMLDivElement = createElement({
    className: 'number-input-wrapper'
  });
  let minusBtn:HTMLButtonElement = document.createElement('button');
  minusBtn.innerHTML = '&ndash;';
  let plusBtn:HTMLButtonElement = document.createElement('button');
  plusBtn.innerHTML = '&#43;';

  minusBtn.addEventListener('click',() => { inputEl.stepDown() })
  plusBtn.addEventListener('click', () => { inputEl.stepUp() });

  cont.appendChild(minusBtn);
  cont.appendChild(inputEl);
  cont.appendChild(plusBtn);

  return cont;
}
export { createCartRow }