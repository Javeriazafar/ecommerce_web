import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './cart-dropdown.scss';
import { selectCartItems} from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button';
import CartItems from '../cart-items/cart-items';
import CheckoutPage from '../../pages/checkout-page/checkout';
import { CartAction } from '../../redux/cart/cart.action';

const Cartdropdown=({totalitems,history,dispatch})=>(

<div className='cart-dropdown'>

<div className='cart-items'>

{ totalitems.length ?totalitems.map(item=>(
    <CartItems key={item.id} items={item}/>))
    : (
      <span className="empty-cart">Your cart is empty</span>
    )
}
</div>
  
<CustomButton onClick={()=>{
  history.push('/checkout')
dispatch(CartAction())
}
}>VIEW CHECKOUT</CustomButton>

</div>

);

const mapStateToProps=createStructuredSelector(
{
  totalitems : selectCartItems
}
);


export default withRouter( connect(mapStateToProps)( Cartdropdown));