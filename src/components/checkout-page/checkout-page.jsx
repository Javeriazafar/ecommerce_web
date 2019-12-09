import React from 'react';
import './checkout-page.scss';
import {connect}  from 'react-redux';
import { ClearItem, AddItem, RemoveItem } from '../../redux/cart/cart.action';

const Checkout =({totalitem, clearItem, AddItem,RemoveItem})=>{
    const {name,price,imageUrl,quantity}=totalitem
   
return (<div className='checkout-item'>
<div className='image-container'>
<img alt='item' src={imageUrl}/>
</div>
<span className='name'>{name}</span>

<span className='quantity'>
<div className="arrow" onClick={()=>RemoveItem(totalitem)}>&#10094;</div>
<span className='value'>{quantity}</span>
<div className="arrow" onClick={()=>AddItem(totalitem)}>&#10095;</div>
</span>
<span className='price'>{price}</span>
<div className='remove-button' onClick={()=>clearItem(totalitem)}>&#10005;</div>

</div>)

};
 const mapDispatchToProps=(dispatch)=>({
       clearItem:item=>dispatch(ClearItem(item)),
       AddItem:item=> dispatch(AddItem(item)),
       RemoveItem :item=> dispatch(RemoveItem(item))
 })
export default connect(null,mapDispatchToProps)(Checkout);