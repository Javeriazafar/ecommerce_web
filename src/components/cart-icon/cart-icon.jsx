import React from 'react';
import './cart-icon.scss';

import {createStructuredSelector} from 'reselect';
import {ReactComponent as Shoppingicon}  from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {CartAction} from '../../redux/cart/cart.action';
import { selectItemCount } from '../../redux/cart/cart.selectors';
const Carticon=({CartAction,itemscount})=>(

<div className='cart-icon' onClick={CartAction}>
    <Shoppingicon class='shopping-icon' />
<span className='item-count'>{itemscount}</span>

</div>

);
 const mapDispatchToProps=(dispatch)=>({
     CartAction:()=>dispatch(CartAction())

 });

 const mapStateToProps=createStructuredSelector({
 itemscount: selectItemCount
 });


export default connect(mapStateToProps,mapDispatchToProps)(Carticon);