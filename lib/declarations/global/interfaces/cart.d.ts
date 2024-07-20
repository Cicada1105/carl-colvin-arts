declare enum CartAction {
    Add = 0,
    Update = 1,
    Delete = 2
}
interface CustomEventProps<T> {
    bubbles?: boolean;
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
interface UpdateReedInterface extends UpdateCartActionloadInterface {
    id: number;
    name: string;
    cost: number;
    quantity: number;
    category?: string;
}
interface DeleteReedInterface extends UpdateCartActionloadInterface {
    id: number;
}
declare type UpdateCartPayload = AddReedInterface | UpdateReedInterface | DeleteReedInterface;
interface ReedStorageItem {
    id: number;
    name: string;
    cost: number;
    quantity: number;
    category?: string;
}
export { CartAction, CustomEventProps, UpdateCartActionloadInterface, AddReedInterface, UpdateReedInterface, DeleteReedInterface, UpdateCartPayload, ReedStorageItem };
