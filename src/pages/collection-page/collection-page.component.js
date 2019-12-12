import React from 'react';
import {connect} from 'react-redux';
import './collection-page.scss';
import Displayimg from '../../components/component-display/component-display';
//import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { CollectionIdMap } from '../../redux/ShopData/shopdata.selector';


  const CollectionPage =({collection})=>{

console.log(collection);

     const  {title, items}=collection;
  
      return(
      <div className='collection-page'>
      <h1 className='title'>{title}</h1>
      <div className='items'>
      {
      items.map(item=>(<Displayimg key={item.id} item={item} />))
      }
      </div>
      </div>

  )};
  const mapStateToProps=(state,ownProps)=>(
    { collection: CollectionIdMap(ownProps.match.params.collectionID)(state)}
  );

  export default connect(mapStateToProps)(CollectionPage);

