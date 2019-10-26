import React from 'react';
    

import './component-dispplay.scss';
const Displayimg=({id,imageUrl,name,price})=>(

<div className='overall-display'>

<div className='image' style={{
    backgroundImage:`url(${imageUrl})`
}}/>


<div className='collection-footer'>
<span className='name'>{name}</span>
<span className='price'>{price}</span>
</div>

</div>


);
export default Displayimg;