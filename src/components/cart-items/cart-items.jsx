import React from 'react';
import './cart-items.scss';

const CartItems=({items:{imageUrl,price,name,quantity}})=>(

<div className='cart-item'>
<img src={imageUrl} alt='item'></img>
<div className='cart-details'>

<span className='name'>{name}</span>
<span className='price'>{quantity} x ${price}</span>
</div>

</div>

)

export default CartItems;