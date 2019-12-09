import React from 'react';
import './checkout.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors'
import Checkout from '../../components/checkout-page/checkout-page';
const CheckoutPage =({totalitems,price,total})=>
(
<div className='checkout-page'>
    <div className='checkout-header'>
<div className='header-block'>
<span> Products</span>
</div>
<div className='header-block'>
<span> Description</span>
</div>
<div className='header-block'>
<span> Quantity</span>
</div>
<div className='header-block'>
<span> Price</span>
</div>
<div className='header-block'>
<span> Remove</span>
</div>
    </div>
    { totalitems.map((item)=><Checkout totalitem={item}/>)}
    <span className='total'>TOTAL: ${total}</span>
     </div>
);
 const mapStateToProps =createStructuredSelector({
     totalitems:selectCartItems,
total:selectCartTotal
 })
export default connect(mapStateToProps)( CheckoutPage);