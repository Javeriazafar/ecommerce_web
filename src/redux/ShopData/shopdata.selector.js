import {createSelector} from 'reselect';

const COLLECTION_ID_MAP ={
    hats:1,
    sneakers:2,
    jackets:3,
    women:4,
    mens:5
}
 
const selectShopData= state=>state.ShopData;

export const ShopDataSelector =createSelector(
    [selectShopData],
    ShopData=>ShopData.collection
);


export const CollectionIdMap= CollectionurlParam=>
createSelector(
    [ShopDataSelector],
    collection=> collection.find(collections=>collections.id===COLLECTION_ID_MAP[CollectionurlParam])
)
;
