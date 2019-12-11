import Shop_data from '../../shops/shop.js';

const INITITAL_STATE={
    collection:Shop_data
}

const ShopDataReducer=(state=INITITAL_STATE,action)=>{

switch(action.type)
{default:
return state;
}
}

export default ShopDataReducer;