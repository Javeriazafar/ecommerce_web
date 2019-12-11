import React from 'react';
import './collection-preview.component.scss';

import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';
import Preview from '../preview-items/preview_item';
import { ShopDataSelector } from '../../redux/ShopData/shopdata.selector';
const CollectionPreview =({collections})=>(
    
        <div className='collections-overview'>
        {collections.map(({id,...col})=>(
               <Preview key={id} {...col}/>))
              }
        </div>
    
);
const mapStateToProps=createStructuredSelector(
    {  collections :ShopDataSelector}
    )

export default connect (mapStateToProps)(CollectionPreview);