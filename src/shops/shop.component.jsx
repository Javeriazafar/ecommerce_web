import React from 'react';
import Shop_data from './shop';
import Preview from '../components/preview-items/preview_item';
class Shop extends React.Component{

constructor()
{
    super();
    this.state={
collections:Shop_data
    };
}
render()
{
  const {collections}=this.state;
  return (
    <div>{collections.map(({id,...col})=>(
           <Preview key={id} {...col}/>))
          }
    </div>
          );
}
}
export default Shop;