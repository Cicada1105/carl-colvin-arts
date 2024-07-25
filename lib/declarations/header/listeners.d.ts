import { UpdateCartPayload } from '../global/interfaces/cart';
declare function updateCartListener<T extends UpdateCartPayload>(e: CustomEvent<T>): void;
declare function viewCartPage(): void;
export { updateCartListener, viewCartPage };
