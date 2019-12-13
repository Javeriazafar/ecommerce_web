import React from 'react';
import './collection-preview.component.scss';

import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import Preview from '../preview-items/preview_item';
import { collectionPreviewselect } from '../../redux/ShopData/shopdata.selector';
const CollectionPreview =({collection})=>(
    
        <div className='collections-overview'>
        {collection.map(({id,...col})=>(
               <Preview key={id} {...col}/>))
              }
        </div>
    
);
const mapStateToProps=createStructuredSelector(
    {  collection :collectionPreviewselect}
    )

export default connect (mapStateToProps)(CollectionPreview);