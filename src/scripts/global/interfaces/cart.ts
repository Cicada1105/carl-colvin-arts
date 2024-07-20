enum CartAction {
  Add,
  Update,
  Delete
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
  name: string;
  cost: number;
  quantity: number;
  category?: string;
}
interface DeleteReedInterface extends UpdateCartActionloadInterface  {
  id: number;
}
type UpdateCartPayload = AddReedInterface | UpdateReedInterface | DeleteReedInterface;

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
  UpdateCartPayload, ReedStorageItem
}