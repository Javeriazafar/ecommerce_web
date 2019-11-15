import React from 'react';
    

import './component-dispplay.scss';
import CustomButton from '../custom-button/custom-button';
const Displayimg=({id,imageUrl,name,price})=>(

<div className='overall-display'>

<div className='image' style={{
    backgroundImage:`url(${imageUrl})`
}}/>


<div className='collection-footer'>
<span className='name'>{name}</span>
<span className='price'>{price}</span>
</div>
<CustomButton invert>Add to cart</CustomButton>
</div>


);
export default Displayimg;