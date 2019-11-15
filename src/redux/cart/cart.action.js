import { CartActionType } from './cart.type';


export const CartAction=()=>({
type: CartActionType.TOGGLE_CART_DROPDOWN
});

export const AddItem=(item)=>(
    {
        type: CartActionType.ADD_ITEM,
        payload:item
    }
)

