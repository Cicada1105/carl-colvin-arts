enum CartAction {
  Add,
  Update,
  Delete,
  Clear
}

interface CustomEventProps<T> {
  bubbles?:boolean;
  detail: T;
}
interface UpdateCartActionloadInterface {
  action: CartAction;
}
interface AddReedInterface extends UpdateCartActionloadInterface {
  name: string;
  cost: number;
  quantity: number;
  category?: string;
}
interface UpdateReedInterface extends UpdateCartActionloadInterface  {
  id: number;
  quantity: number;
}
interface DeleteReedInterface extends UpdateCartActionloadInterface  {
  id: number;
}
interface ClearCartInterface extends UpdateCartActionloadInterface { }

type UpdateCartPayload = AddReedInterface | UpdateReedInterface | DeleteReedInterface | ClearCartInterface;

interface ReedStorageItem {
  id: number;
  name: string;
  cost: number;
  quantity: number;
  category?: string;
}

export { 
  CartAction, CustomEventProps, UpdateCartActionloadInterface,
  AddReedInterface, UpdateReedInterface, DeleteReedInterface,
  ClearCartInterface, UpdateCartPayload, ReedStorageItem
}