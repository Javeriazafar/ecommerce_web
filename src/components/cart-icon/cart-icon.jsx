import React from 'react';
import './cart-icon.scss';
import {ReactComponent as Shoppingicon}  from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {CartAction} from '../../redux/cart/cart.action';
const Carticon=({CartAction})=>(

<div className='cart-icon' onClick={CartAction}>
    <Shoppingicon class='shopping-icon' />
<span className='item-count'>0</span>

</div>

);
 const mapDispatchToProps=(dispatch)=>({
     CartAction:()=>dispatch(CartAction())

 });


export default connect(null,mapDispatchToProps)(Carticon);