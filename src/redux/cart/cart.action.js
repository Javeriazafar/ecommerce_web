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
 export const ClearItem =(item)=>({
     type:CartActionType.CLEAR_ITEMS_FROM_CHECKOUT,
     payload:item
 })
 export const RemoveItem=(item)=>({
type:CartActionType.REMOVE_ITEM,
payload:item

 })