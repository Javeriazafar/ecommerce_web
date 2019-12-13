import {createSelector} from 'reselect';


const selectShopData= state=>state.ShopData;

export const ShopDataSelector =createSelector(
    [selectShopData],
    ShopData=>ShopData.collection
);
 export const collectionPreviewselect=createSelector(
     [ShopDataSelector],
     collection=>Object.keys(collection).map(key=>collection[key])
 )

export const CollectionIdMap= CollectionurlParam=>
createSelector(
    [ShopDataSelector],
    collection=> collection[CollectionurlParam]
)
;
