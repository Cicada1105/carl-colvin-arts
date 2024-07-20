import { CartAction } from '../global/interfaces/general';
interface UpdateCartActionloadInterface {
    action: CartAction;
}
interface AddReedInterface extends UpdateCartActionloadInterface {
    name: string;
    cost: number;
    quantity: number;
    categories?: string[];
}
interface UpdateReedInterface extends UpdateCartActionloadInterface {
    id: number;
    name: string;
    cost: number;
    quantity: number;
    categories?: string[];
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
    categories?: string[];
}
export { UpdateCartActionloadInterface, AddReedInterface, UpdateReedInterface, DeleteReedInterface, UpdateCartPayload, ReedStorageItem };
