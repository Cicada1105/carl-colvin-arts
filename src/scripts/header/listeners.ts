import {
  CartAction, ReedStorageItem,
  AddReedInterface, UpdateReedInterface, DeleteReedInterface,
  UpdateCartPayload, ClearCartInterface
} from '@global/interfaces/cart'

function updateCartListener<T extends UpdateCartPayload>(e: CustomEvent<T>){
  const CART_NAME:string = 'cca-reed-cart';
  let cartPayload:T = e.detail;
  let cartItems:ReedStorageItem[] = JSON.parse(sessionStorage.getItem(CART_NAME) || '[]');
  /*
    {
      action: 'add' | 'update' | 'delete'
      detail: UpdateCartPayload
    }
  */
  switch ( cartPayload.action ) {
    case CartAction.Add:
      let addReedProps:AddReedInterface = <AddReedInterface>cartPayload;
      
      // Check if item exists
      let foundIndex:number = cartItems.findIndex((reed:ReedStorageItem) => reed['name'] === addReedProps['name']);

      if ( foundIndex === -1 ) { // Item not in cart, add new item to cart
        let idString:string = Math.random().toString().slice(2);

        cartItems.push({
          id: parseInt(idString),
          name: addReedProps['name'],
          cost: addReedProps['cost'],
          quantity: addReedProps['quantity'],
          category: addReedProps?.category
        })
      }
      else { // Item exists
        let cartItem:ReedStorageItem = cartItems[foundIndex];

        // If cost is the same, add quantity to existing quantity
        if ( cartItem['cost'] === addReedProps['cost'] )
          cartItems[foundIndex]['quantity'] += addReedProps['quantity'];
        else { // Same reed type, different variable cost
          let idString:string = Math.random().toString().slice(2);

          cartItems.push({
            id: parseInt(idString),
            name: addReedProps['name'],
            cost: addReedProps['cost'],
            quantity: addReedProps['quantity'],
            category: addReedProps?.category
          })
        }
      }

      sessionStorage.setItem(
        CART_NAME,
        JSON.stringify( cartItems )
      );
    break;
    case CartAction.Update:
      let updateReedProps:UpdateReedInterface = <UpdateReedInterface>cartPayload;
      
      // Update cart item
      cartItems = cartItems.map((reed:ReedStorageItem) => 
        ( reed.id === updateReedProps.id ) ?
          {
            ...reed,
            ...updateReedProps
          } :
          reed
      )
      sessionStorage.setItem(
        CART_NAME,
        JSON.stringify( cartItems )
      );
    break;
    case CartAction.Delete:
      let deleteReedProps:DeleteReedInterface = <DeleteReedInterface>cartPayload;
      sessionStorage.setItem(
        CART_NAME,
        JSON.stringify(
          cartItems.filter((reed:ReedStorageItem) => reed['id'] !== deleteReedProps.id)
        )
      );
    break;
    case CartAction.Clear:
      // Nothing stored in this payload.
      // This is done for consistency and future unknowns.
      let clearCartProps:ClearCartInterface = <ClearCartInterface>cartPayload;
      // Clear users cart
      sessionStorage.removeItem(CART_NAME);
    break;
  }
}
function viewCartPage() {
  const isHomePage:boolean = window.location.pathname.includes("index");
  const isServicePage:boolean = window.location.pathname.includes("services/");
  const isPerformancesPage:boolean = window.location.pathname.includes("performances/");
  const rootDir:string = isPerformancesPage ? "../../../" : (isServicePage ? "../../" : (isHomePage ? "./" : "../"))

  window.open(`${rootDir}pgs/cart.html`,'_self');
}

export {
  updateCartListener, viewCartPage
}