import {createSelector} from 'reselect';


const selectShopData= state=>state.ShopData;

export const ShopDataSelector =createSelector(
    [selectShopData],
    ShopData=>ShopData.collection
);