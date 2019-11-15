import React from 'react';
import './preview_item.scss';
import Displayimg from '../component-display/component-display';


const Preview=({title,items})=>(

<div className='overall-page'>
<h1 className='title'>{title.toUpperCase()}</h1>
<div className='preview'>
{items
    .filter((items,indx)=>indx<4)
    .map((items)=>
(<Displayimg key={items.id} item={items}/>)
)}
</div>
       
    
</div>



);

export default Preview;