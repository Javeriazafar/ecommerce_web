
    import { CartActionType } from './cart.type';
    import { AddItemToCart} from './cart.utils';


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
       
default:
    return state;

}

};
export default cartReducer;