import {
  CartAction, ReedStorageItem,
  AddReedInterface, UpdateReedInterface, DeleteReedInterface,
  UpdateCartPayload
} from '../global/interfaces/cart'

function updateCartListener<T extends UpdateCartPayload>(e: CustomEvent<T>){
  const CART_NAME:string = 'cca-reed-cart';
  let cartPayload:T = e.detail;
  let storedReedData:ReedStorageItem;
  /*
    {
      action: 'add' | 'update' | 'delete'
      detail: UpdateCartPayload
    }
  */
  switch ( cartPayload.action ) {
    case CartAction.Add:
      let addReedProps:AddReedInterface = <AddReedInterface>cartPayload;
      let idString:string = Math.random().toString().slice(2);
      storedReedData = {
        id: parseInt(idString),
        name: addReedProps['name'],
        cost: addReedProps['cost'],
        quantity: addReedProps['quantity']
      }

      if ( addReedProps.category ) {
        storedReedData['category'] = addReedProps['category'];
      }

      sessionStorage.setItem(
        CART_NAME,
        JSON.stringify(
          [
            ...JSON.parse(sessionStorage.getItem(CART_NAME) || '[]'),
            storedReedData
          ]
        )
      );
    break;
    case CartAction.Update:
      let updateReedProps:UpdateReedInterface = <UpdateReedInterface>cartPayload;
      storedReedData = {
        id: updateReedProps['id'],
        name: updateReedProps['name'],
        cost: updateReedProps['cost'],
        quantity: updateReedProps['quantity']
      }

      if ( updateReedProps.category ) {
        storedReedData['category'] = updateReedProps['category'];
      }

      sessionStorage.setItem(
        CART_NAME,
        JSON.stringify(
          JSON.parse(sessionStorage.getItem(CART_NAME) || '[]').map((reed:ReedStorageItem) => {
            if ( reed.id === updateReedProps.id ) {
              return {
                ...reed,
                storedReedData
              }
            }
            else {
              return reed;
            }
          })
        )
      );
    break;
    case CartAction.Delete:
      let deleteReedProps:DeleteReedInterface = <DeleteReedInterface>cartPayload;
      sessionStorage.setItem(
        CART_NAME,
        JSON.stringify(
          JSON.parse(sessionStorage.getItem(CART_NAME) || '[]').filter((reed:ReedStorageItem) => reed['id'] !== deleteReedProps.id)
        )
      );
    break;
  }
}

export {
  updateCartListener
}