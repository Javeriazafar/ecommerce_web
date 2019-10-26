import React from 'react';
import './preview_item.scss';
import Displayimg from '../component-display/component-display';


const Preview=({title,items})=>(

<div className='overall-page'>
<h1 className='title'>{title.toUpperCase()}</h1>
<div className='preview'>
{items
    .filter((item,indx)=>indx<4)
    .map(({id,...initem})=>
(<Displayimg key={id} {...initem}/>)
)}
</div>
       
    
</div>



);

export default Preview;