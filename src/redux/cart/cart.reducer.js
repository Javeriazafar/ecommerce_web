
    import { CartActionType } from './cart.type';
    import { AddItemToCart, RemoveItemFromCheckout} from './cart.utils';
import { stat } from 'fs';


const INITIAL_STATE={
hidden: true,
totalitems:[]
};

const cartReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type)
{
    case CartActionType.TOGGLE_CART_DROPDOWN:
    return{
        ...state,
        hidden:!state.hidden
    };
    case CartActionType.ADD_ITEM:
    return{
      ...state,
       totalitems:AddItemToCart(state.totalitems,action.payload)
    };

    case CartActionType.CLEAR_ITEMS_FROM_CHECKOUT:
    return{
      ...state,
    totalitems :state.totalitems.filter(
    item=> item.id !== action.payload.id
         )
            }

     case CartActionType.REMOVE_ITEM:
         return{
             ...state,
             totalitems:RemoveItemFromCheckout(state.totalitems,action.payload)
         }   ;    
       
default:
    return state;

}

};
export default cartReducer;