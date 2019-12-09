import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import  DirectoryReducer from './directory/directory.reducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig={
    key:'root',
    storage,
    whitelist:['cart','directory']
} 

const rootReducer =combineReducers(
    {
        user:userReducer,
        cart: cartReducer,
        directory:DirectoryReducer
    }
);


export default persistReducer(persistConfig,rootReducer);

