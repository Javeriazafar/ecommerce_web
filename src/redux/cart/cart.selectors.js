import {createSelector} from 'reselect';

const inputSelectorCart =state=>state.cart;

export const selectCartItems = createSelector(

    [inputSelectorCart],
    cart=>cart.totalitems
    
);
export const selectCarthidden = createSelector(

    [inputSelectorCart],
    cart=>cart.hidden
    
);
export const selectCartTotal = createSelector(

    [selectCartItems],
    totalitems=> totalitems.reduce(
        (accumulator,cartitems)=> accumulator+cartitems.quantity * cartitems.price,0
    )
    
    
);

export const selectItemCount=createSelector(
    [selectCartItems],
   totalitems=>totalitems.reduce(
    (accumulator,cartitems)=>accumulator+cartitems.quantity,0
   )
);