import React from 'react';

import {connect} from 'react-redux';

import './cart-dropdown.scss';

import CustomButton from '../custom-button/custom-button';
import CartItems from '../cart-items/cart-items';

const Cartdropdown=({totalitems})=>(

<div className='cart-dropdown'>

<div className='cart-items'>

{ totalitems.map(item=>(
    <CartItems key={item.id} items={item}/>))
}
</div>
  
<CustomButton>VIEW CHECKOUT</CustomButton>

</div>

);

const mapStateToProps=({cart:{totalitems}})=>(

    {totalitems}
);


export default connect(mapStateToProps)( Cartdropdown);