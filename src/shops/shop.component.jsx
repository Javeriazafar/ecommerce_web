import React from 'react';

import {Route} from 'react-router-dom';
import CollectionPreview from '../components/collection-preview/collection-preview.component';
import collectionPage from '../pages/collection-page/collection-page.component';
const Shop=({match})=>(
    <div className='shop-page'>
  <Route exact path={`${match.path}`} component={CollectionPreview} />
  <Route  path={`${match.path}/:collectionID`} component={collectionPage} />
  
        </div>
        );


export default Shop;