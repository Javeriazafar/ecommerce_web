import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.scss';


const Menu =({title,imageUrl,size,history,linkUrl,match})=>(
<div  className={`${size} menu-item`}   onClick={()=>{history.push(`${match.url}${linkUrl}`)}}>

<div className='background-image'
    style ={{
        backgroundImage:`url(${imageUrl})`
        }} />
    <div className='content'>
        <div className='tile' >{title.toUpperCase()}</div>
        
    <span className='subtile'>shop now</span>
    </div>
    </div>


);
export default withRouter(Menu);