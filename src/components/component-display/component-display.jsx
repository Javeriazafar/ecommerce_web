import React from 'react';
    
import {connect} from 'react-redux';
import './component-dispplay.scss';
import CustomButton from '../custom-button/custom-button';
import { AddItem } from '../../redux/cart/cart.action';
const Displayimg=({item,AddItem})=>{
    const {imageUrl,name,price}=item;
    return(
<div className='overall-display'>

<div className='image' style={{
    backgroundImage:`url(${imageUrl})`
}}/>


<div className='collection-footer'>
<span className='name'>{name}</span>
<span className='price'>{price}</span>
</div>
<CustomButton onClick={()=>AddItem(item)} invert>Add to cart</CustomButton>
</div>


);};


const mapDispatchToProps=(dispatch)=>(
    {
        AddItem:item=> dispatch(AddItem(item))
    }
);

export default connect(null,mapDispatchToProps)(Displayimg);